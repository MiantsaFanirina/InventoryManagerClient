"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Extended product data with categories
const data: Product[] = [
  {
    id: "p1",
    name: "Produit 1",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-06-01",
    quantity: 10,
    buyPrice: 100000,
    sellPrice: 150000,
    category: "PPN",
  },
  {
    id: "p2",
    name: "Produit 2",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-07-15",
    quantity: 5,
    buyPrice: 50000,
    sellPrice: 75000,
    category: "Boisson",
  },
  {
    id: "p3",
    name: "Produit 3",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-08-20",
    quantity: 20,
    buyPrice: 80000,
    sellPrice: 120000,
    category: "Produit Laitier",
  },
  {
    id: "p4",
    name: "Produit 4",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-09-10",
    quantity: 8,
    buyPrice: 60000,
    sellPrice: 90000,
    category: "PPN",
  },
  {
    id: "p5",
    name: "Jus de Fruit",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-05",
    quantity: 15,
    buyPrice: 25000,
    sellPrice: 35000,
    category: "Boisson",
  },
  {
    id: "p6",
    name: "Lait",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-11-12",
    quantity: 12,
    buyPrice: 40000,
    sellPrice: 60000,
    category: "Produit Laitier",
  },
  {
    id: "p7",
    name: "Produit 5",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-06-10",
    quantity: 25,
    buyPrice: 90000,
    sellPrice: 130000,
    category: "PPN",
  },
  {
    id: "p8",
    name: "Produit 6",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-06-20",
    quantity: 30,
    buyPrice: 70000,
    sellPrice: 100000,
    category: "Boisson",
  },
  {
    id: "p9",
    name: "Produit 7",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-06-30",
    quantity: 22,
    buyPrice: 55000,
    sellPrice: 80000,
    category: "Produit Laitier",
  },
  {
    id: "p10",
    name: "Produit 8",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-07-05",
    quantity: 18,
    buyPrice: 120000,
    sellPrice: 170000,
    category: "PPN",
  },
  {
    id: "p11",
    name: "Jus d'Orange",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-07-15",
    quantity: 16,
    buyPrice: 20000,
    sellPrice: 30000,
    category: "Boisson",
  },
  {
    id: "p12",
    name: "Fromage",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-07-20",
    quantity: 10,
    buyPrice: 75000,
    sellPrice: 110000,
    category: "Produit Laitier",
  },
  {
    id: "p13",
    name: "Produit 9",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-07-25",
    quantity: 20,
    buyPrice: 95000,
    sellPrice: 135000,
    category: "PPN",
  },
  {
    id: "p14",
    name: "Produit 10",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-08-05",
    quantity: 14,
    buyPrice: 30000,
    sellPrice: 40000,
    category: "Boisson",
  },
  {
    id: "p15",
    name: "Yaourt",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-08-15",
    quantity: 11,
    buyPrice: 45000,
    sellPrice: 65000,
    category: "Produit Laitier",
  },
  {
    id: "p16",
    name: "Produit 11",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-08-25",
    quantity: 17,
    buyPrice: 85000,
    sellPrice: 125000,
    category: "PPN",
  },
  {
    id: "p17",
    name: "Eau Minérale",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-09-01",
    quantity: 30,
    buyPrice: 15000,
    sellPrice: 25000,
    category: "Boisson",
  },
  {
    id: "p18",
    name: "Crème Fraîche",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-09-15",
    quantity: 9,
    buyPrice: 70000,
    sellPrice: 95000,
    category: "Produit Laitier",
  },
  {
    id: "p19",
    name: "Produit 12",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-09-20",
    quantity: 21,
    buyPrice: 100000,
    sellPrice: 140000,
    category: "PPN",
  },
  {
    id: "p20",
    name: "Thé",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-09-30",
    quantity: 25,
    buyPrice: 20000,
    sellPrice: 35000,
    category: "Boisson",
  },
  {
    id: "p21",
    name: "Kefir",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-01",
    quantity: 8,
    buyPrice: 30000,
    sellPrice: 45000,
    category: "Produit Laitier",
  },
  {
    id: "p22",
    name: "Produit 13",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-10",
    quantity: 15,
    buyPrice: 60000,
    sellPrice: 90000,
    category: "PPN",
  },
  {
    id: "p23",
    name: "Soda",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-12",
    quantity: 20,
    buyPrice: 25000,
    sellPrice: 40000,
    category: "Boisson",
  },
  {
    id: "p24",
    name: "Produit 14",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-14",
    quantity: 28,
    buyPrice: 50000,
    sellPrice: 70000,
    category: "Produit Laitier",
  },
  {
    id: "p25",
    name: "Produit 15",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-16",
    quantity: 14,
    buyPrice: 75000,
    sellPrice: 105000,
    category: "PPN",
  },
  {
    id: "p26",
    name: "Boisson Énergétique",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-18",
    quantity: 11,
    buyPrice: 35000,
    sellPrice: 50000,
    category: "Boisson",
  },
  {
    id: "p27",
    name: "Produit 16",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-20",
    quantity: 16,
    buyPrice: 90000,
    sellPrice: 130000,
    category: "Produit Laitier",
  },
  {
    id: "p28",
    name: "Produit 17",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-22",
    quantity: 13,
    buyPrice: 45000,
    sellPrice: 70000,
    category: "PPN",
  },
  {
    id: "p29",
    name: "Jus de Pomme",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-24",
    quantity: 17,
    buyPrice: 22000,
    sellPrice: 32000,
    category: "Boisson",
  },
  {
    id: "p30",
    name: "Yaourt à Boire",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-26",
    quantity: 9,
    buyPrice: 60000,
    sellPrice: 85000,
    category: "Produit Laitier",
  },
  {
    id: "p31",
    name: "Produit 18",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-28",
    quantity: 12,
    buyPrice: 50000,
    sellPrice: 75000,
    category: "PPN",
  },
  {
    id: "p32",
    name: "Boisson Naturelle",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-10-30",
    quantity: 20,
    buyPrice: 15000,
    sellPrice: 25000,
    category: "Boisson",
  },
  {
    id: "p33",
    name: "Produit 19",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-11-01",
    quantity: 15,
    buyPrice: 80000,
    sellPrice: 120000,
    category: "Produit Laitier",
  },
  {
    id: "p34",
    name: "Produit 20",
    picture: "https://via.placeholder.com/50",
    createDate: "2023-11-05",
    quantity: 10,
    buyPrice: 95000,
    sellPrice: 135000,
    category: "PPN",
  },
  
]

export type Product = {
  id: string
  name: string
  picture: string
  createDate: string
  quantity: number
  buyPrice: number
  sellPrice: number
  category: string
}

// Define columns including category
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "picture",
    header: "Image",
    cell: ({ row }) => (
      <img src={row.getValue("picture")} alt="Produit" className="w-12 h-12" />
    ),
  },
  {
    accessorKey: "name",
    header: "Nom",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createDate",
    header: "Date de Création",
    cell: ({ row }) => <div>{row.getValue("createDate")}</div>,
  },
  {
    accessorKey: "quantity",
    header: "Quantité",
    cell: ({ row }) => <div>{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "category",
    header: "Catégorie",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "buyPrice",
    header: "Prix d'Achat",
    cell: ({ row }) => {
      const buyPrice = parseFloat(row.getValue("buyPrice"))

      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "MGA",
        useGrouping: true,
        minimumFractionDigits: 0,
      }).format(buyPrice)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "sellPrice",
    header: "Prix de Vente",
    cell: ({ row }) => {
      const sellPrice = parseFloat(row.getValue("sellPrice"))

      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "MGA",
        useGrouping: true,
        minimumFractionDigits: 0,
      }).format(sellPrice)

      return <div>{formatted}</div>
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Ouvrir le menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(`Modifier ${product.name}`)}>
              Modifier le produit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => alert(`Supprimer ${product.name}`)}>
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
export default function ProductTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const pageSize = 7
    const [pageIndex, setPageIndex] = React.useState(0)

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination: { pageIndex, pageSize }, // Pass the current pagination state
        },
        manualPagination: true,
        pageCount: Math.ceil(data.length / pageSize), // Use original data length for total page count
    })

    // Calculate the filtered data based on the current sorting and filtering
    const filteredData = React.useMemo(() => {
        return table.getFilteredRowModel().rows
    }, [table, sorting, columnFilters])

    // Slice the data to only include the current page
    const paginatedData = React.useMemo(() => {
        const start = pageIndex * pageSize
        const end = start + pageSize
        return filteredData.slice(start, end)
    }, [filteredData, pageIndex, pageSize])

    React.useEffect(() => {
        // Update the table when filters or sorting changes
        table.setPageCount(Math.ceil(filteredData.length / pageSize))
        setPageIndex(0) // Reset to first page when data changes
    }, [columnFilters, sorting, filteredData, pageSize]) // Update dependencies

    return (
        <div className="w-full">
            <div className="flex items-center py-4 space-x-4">
                <Input
                    placeholder="Rechercher un produit..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Colonnes <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {paginatedData.length ? (
                            paginatedData.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Aucun résultat.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
                        disabled={pageIndex === 0}
                    >
                        Précédent
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPageIndex((old) => Math.min(old + 1, table.getPageCount() - 1))}
                        disabled={pageIndex >= table.getPageCount() - 1}
                    >
                        Suivant
                    </Button>
                </div>
            </div>
        </div>
    )
}
