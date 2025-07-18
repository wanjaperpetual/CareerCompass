import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const users = [
    { id: 'usr_1', name: 'Jane Doe', email: 'jane.doe@email.com', role: 'user', joined: '2023-01-15' },
    { id: 'usr_2', name: 'John Smith', email: 'john.smith@email.com', role: 'user', joined: '2023-02-20' },
    { id: 'usr_3', name: 'Alice Johnson', email: 'alice.j@email.com', role: 'user', joined: '2023-03-10' },
    { id: 'usr_4', name: 'Bob Brown', email: 'b.brown@email.com', role: 'user', joined: '2023-04-05' },
    { id: 'usr_5', name: 'Charlie Davis', email: 'charlie.d@email.com', role: 'admin', joined: '2023-01-01' },
]

export default function AdminUsersPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
                User Management
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                View, manage, and edit user accounts.
                </p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                    <CardDescription>A list of all users in the system.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                                    {user.role}
                                </Badge>
                            </TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
    )
}
