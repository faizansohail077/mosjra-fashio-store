"use client"
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import ProductCard from './ProductCard';

type Props = {
    id?: string;
    text?: string;
    price?: string;
    img?: string | any;

}

function Items({ currentItems, sale }: { currentItems: Props[], sale?: Boolean }) {
    console.log(currentItems, 'currentItemscurrentItems')
    return (
        <div className='flex gap-0 md:gap-2 justify-center  flex-wrap' >
            {currentItems &&
                currentItems.map((item: any) => (
                    <ProductCard sale={sale} key={item.id} data={item} />
                ))}
        </div>
    );
}


function Pagination({ itemsPerPage, data, sale }: { itemsPerPage: number, data: Props[], sale?: Boolean }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data?.length / itemsPerPage);

    const handlePageClick = ({ selected }: { selected: number }) => {
        const newOffset = (selected * itemsPerPage) % data?.length;
        console.log(
            `User requested page number ${selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>

            <Items sale={sale} currentItems={currentItems} />
            <div className="mx-3 mt-10 md:mx-0 flex items-center justify-center ">
                <ReactPaginate
                    className='flex gap-0 flex-wrap '
                    pageClassName={'bg-white px-5 py-1 border-2'}
                    // pageLinkClassName={"bg-green-300"}
                    activeClassName={"text-red-600"}
                    disabledClassName="hidden"
                    breakLabel="..."
                    nextLabel={<NextLabel />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={0}
                    pageCount={pageCount}
                    // previousLabel="< "
                    previousLabel={<PreviousLabel />}
                // renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}

export default Pagination

const PreviousLabel = () => {
    return (
        <div className="bg-white px-5 py-1 border-2">

            <MdArrowBackIosNew size={25} />
        </div>
    )
}
const NextLabel = () => {
    return (
        <div className="bg-white px-5 py-1 border-2">

            <MdArrowForwardIos size={25} />
        </div>
    )
}