import { Dot, Table } from 'lucide-react';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';


const invoices = [
    {
        image: "https://themewagon.github.io/inapp/assets/images/product-2.png",
        name: "Wireless Earphones",
        totalAmount: "$89",
        units: "2,500 Units",
        rate: "18%",
    },
    {
        image: "https://themewagon.github.io/inapp/assets/images/product-1.png",
        name: "Gaming Joy Stick",
        totalAmount: "$49",
        units: "1,000 Units",
        rate: "32%",
    },
    {
        image: "https://themewagon.github.io/inapp/assets/images/product-3.png",
        name: "Smart Watch Pro",
        totalAmount: "$98",
        units: "1,250 Units",
        rate: "22%",
    },
    {
        image: "https://themewagon.github.io/inapp/assets/images/product-4.png",
        name: "USB-C Fast Charger",
        totalAmount: "$35",
        units: "3,000 Units",
        rate: "15%",
    },
    {
        image: "https://themewagon.github.io/inapp/assets/images/product-5.png",
        name: "Portable Bluetooth Speaker",
        totalAmount: "$65",
        units: "2,000 Units",
        rate: "25%",
    },

]

const Datatable = () => {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead>rate</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((image) => (
                        <TableRow key={image.image}>
                            <TableCell className=""><img src={image.image} alt="" className='w-[40px] rounded-sm' /></TableCell>
                            <TableCell>{image.name}<br />{image.totalAmount}<><Dot className='inline' />
                            </>{image.units}  </TableCell>
                            <TableCell>{image.rate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </>
    )
}

export default Datatable

