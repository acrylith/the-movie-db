import { useMemo } from "react"

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const DOTS = "..."

export const usePagination = ({totalPageCount, siblingsCount = 2, currentPage}) => {
    const paginationRange = useMemo(() => {
        const totalPageNumber = siblingsCount + 5
        if (totalPageNumber >= totalPageCount) {
            console.log("case 1")
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingsCount, 1)
        const rightSiblingIndex = Math.min(currentPage + siblingsCount, totalPageCount)
        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2
        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingsCount
            let leftRange = range(1, leftItemCount)
            console.log("case 2")
            return [...leftRange, DOTS, totalPageCount]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 *siblingsCount
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
            console.log("case 3")
            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex)
            console.log("case 4")
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
    }, [totalPageCount, siblingsCount, currentPage])
    return paginationRange;
}