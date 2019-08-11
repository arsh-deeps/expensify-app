import moment from 'moment';

export default (expenses,{text,sortBy,startDate,endDate}) => {
    let sum = 0;
    let count = 0;
    for(let i=0;i<expenses.length;i++){
        const expense = expenses[i];
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment,'day'): true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        if( startDateMatch && endDateMatch && textMatch){
            sum+=expense.amount;
            count++;
        }
    }

    return {sum,count};
}