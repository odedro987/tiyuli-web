import { CallOptions, ClientUnaryCall, Metadata, requestCallback } from '@grpc/grpc-js'

interface GrpcUnaryServiceInterface<P, R> {
  (message: P, metadata: Metadata, options: CallOptions, callback: requestCallback<R>): ClientUnaryCall
  (message: P, metadata: Metadata, callback: requestCallback<R>): ClientUnaryCall
  (message: P, options: CallOptions, callback: requestCallback<R>): ClientUnaryCall
  (message: P, callback: requestCallback<R>): ClientUnaryCall
}

type GrpcRequestType<T> = T extends GrpcUnaryServiceInterface<infer T, any> ? T : never
type GrpcResponseType<T> = T extends GrpcUnaryServiceInterface<any, infer T> ? T : never

export const promisifyGrpc = <F extends GrpcUnaryServiceInterface<any, any>>(
  rpc: F
): ((
  msg: GrpcRequestType<F>,
  metadata: Metadata,
  options?: CallOptions
) => Promise<GrpcResponseType<F> | undefined>) => {
  return (msg: GrpcRequestType<F>, metadata: Metadata, options: CallOptions = {}) => {
    return new Promise((resolve, reject) => {
      rpc(msg, metadata, options, (error, response) => {
        if (error) {
          reject(error)
        } else {
          resolve(response)
        }
      })
    })
  }
}
