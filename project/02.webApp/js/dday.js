function dayCount() {
    const today = new Date();
    const dday = new Date(2023,05,21);
    const timeGap = dday.getTime() - today.getTime();
    console.log(timeGap)

}

dayCount();