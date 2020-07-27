export const dropdownMenu = (selection, props) => {
    const {
        options
    } = props;

    //Select will have one element all the time
    let select = selection.selectAll('select').data([null]);
    select = select.enter().append('select').merge(select);

    //data join
    const option = select.selectAll('option').data(options);
    option.enter().append('option')
        .merge(option)
        .attr('value', d => d)
        .text(d => d);

};