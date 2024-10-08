import NewExpenseDialog from '@/components/dialogs/new-expense-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ListFilter } from 'lucide-react'

const data = [
  {
    name: 'FamilyMart',
    email: 'liam@example.com',
    type: 'Sale',
    date: '2023-06-23',
    amount: 250.0,
  },
  {
    name: 'Bic Camera',
    email: 'olivia@example.com',
    type: 'Refund',
    status: 'Declined',
    date: '2023-06-24',
    amount: 150.0,
  },
  {
    name: 'Prostitue',
    email: 'noah@example.com',
    type: 'Subscription',
    date: '2023-06-25',
    amount: 350.0,
  },
  {
    name: 'FamilyMart',
    email: 'emma@example.com',
    type: 'Sale',
    date: '2023-06-26',
    amount: 450.0,
  },
  {
    name: 'Ichiran',
    email: 'liam@example.com',
    type: 'Sale',
    date: '2023-06-23',
    amount: 250.0,
  },
  {
    name: 'Suica',
    email: 'liam@example.com',
    type: 'Sale',
    date: '2023-06-23',
    amount: 250.0,
  },
  {
    name: 'Tokyo Rent',
    email: 'olivia@example.com',
    type: 'Refund',
    date: '2023-06-24',
    amount: 150.0,
  },
  {
    name: 'Flight ticket',
    email: 'emma@example.com',
    type: 'Sale',
    date: '2023-06-26',
    amount: 450.0,
  },
]

const Expenses = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Your Expenses</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Expenses Dashboard for Seamless Management and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <NewExpenseDialog />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+25% from last week</div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+10% from last month</div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <TabsContent value="week">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Expenses</CardTitle>
                <CardDescription>Recent expenses from your tiyuli.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Store name?</TableHead>
                      <TableHead className="hidden sm:table-cell">Type</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item, index) => (
                      <TableRow
                        key={index}
                        // bg accent for active
                      >
                        <TableCell>
                          <div className="font-medium">{item.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">{item.email}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{item.type}</TableCell>
                        <TableCell className="hidden md:table-cell">{item.date}</TableCell>
                        <TableCell className="text-right">¥{item.amount.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

export default Expenses
