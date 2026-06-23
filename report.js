function printReport(pages) {
    console.log("=============================");
    console.log("Report");
    console.log("=============================");
    const sortedPages = sortPages(pages);
    for (const [page, count] of sortedPages) {
        console.log(`${page} was found ${count} times`);
    }

    console.log("=============================");
    console.log("End of Report");
    console.log("=============================");
}

function sortPages(pages) {
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a, b) => b[1] - a[1]);
    return pagesArr;
}

export { sortPages, printReport };