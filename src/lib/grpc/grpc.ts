import { CallOptions, ClientUnaryCall, Metadata, requestCallback } from '@grpc/grpc-js'

interface GrpcUnaryServiceInterface<P, R> {
  (message: P, metadata: Metadata, options: CallOptions, callback: requestCallback<R>): ClientUnaryCall
  (message: P, metadata: Metadata, callback: requestCallback<R>): ClientUnaryCall
  (message: P, options: CallOptions, callback: requestCallback<R>): ClientUnaryCall
  (message: P, callback: requestCallback<R>): ClientUnaryCall
}

type GrpcResponseType<T> = T extends GrpcUnaryServiceInterface<any, infer T> ? T : never

export const promisifyGrpc = <
  F extends (msg: any, metadata: Metadata, options: any, callback: requestCallback<any>) => ClientUnaryCall,
>(
  rpc: F
): ((msg: Parameters<F>[0], metadata: Metadata) => Promise<GrpcResponseType<F> | undefined>) => {
  return (msg: Parameters<F>[0], metadata: Metadata) => {
    return new Promise((resolve, reject) => {
      rpc(msg, metadata, {}, (error, response) => {
        if (error) {
          reject(error)
        } else {
          resolve(response)
        }
      })
    })
  }
}
