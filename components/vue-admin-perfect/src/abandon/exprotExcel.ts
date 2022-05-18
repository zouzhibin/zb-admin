const ExcelJS = require("exceljs");

const autoWidthAction = (val,width=10)=>{
    if (val == null) {
        width = 10;
    } else if (val.toString().charCodeAt(0) > 255) {
        /*if chinese*/
        width = val.toString().length * 2;
    } else {
        width = val.toString().length;
    }
    return width
}
export const exportExcel = ({column,data,filename,autoWidth})=>{
    // 创建excel
    const workbook = new ExcelJS.Workbook();
    // 设置信息
    workbook.creator = "Me";
    workbook.title = filename;
    workbook.created = new Date();
    workbook.modified = new Date();
    // 创建工作表
    const worksheet = workbook.addWorksheet(filename);
    // 设置列名
    let columnsName = [];
    column.forEach((item,index)=>{
        let obj = {
            header: item.label, key:item.name, width: null
        }
        if(autoWidth){
            let maxArr = [autoWidthAction(item.label)]
            data.forEach(ite=>{
                let str = ite[item.name] ||''
                if(str){
                    maxArr.push(autoWidthAction(str))
                }
            })
            obj.width = Math.max(...maxArr)+5
        }
        // 设置列名、键和宽度
        columnsName.push(obj);
    })
    worksheet.columns = columnsName;
    // 添加行
    worksheet.addRows(data);
    // 写入文件
    workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data, { type: "application/vnd.ms-excel" }]);
        if (window.navigator.msSaveOrOpenBlob) {
            // msSaveOrOpenBlob方法返回boolean值
            navigator.msSaveBlob(blob, filename + ".xlsx");
            // 本地保存
        } else {
            const link = document.createElement("a"); // a标签下载
            link.href = window.URL.createObjectURL(blob); // href属性指定下载链接
            link.download = filename + ".xlsx"; // dowload属性指定文件名
            link.click(); // click()事件触发下载
            window.URL.revokeObjectURL(link.href); // 释放内存
        }
    });
}
// 默认的列宽
export const DEFAULT_COLUMN_WIDTH = 20;

function getColumnNumber(width: number) {
    // 需要的列数，四舍五入
    return Math.round(width / DEFAULT_COLUMN_WIDTH);
}


function addData(worksheet,headerKeys,headers,data){

}

export const exportMultiHeaderExcel = ({column,data,filename,autoWidth})=>{
    // 创建excel
    const workbook = new ExcelJS.Workbook();
    // 创建工作表
    const worksheet = workbook.addWorksheet(filename);

    // 第一行表头
    const names1= [];
    // 第二行表头
    const names2= [];

    // 用于匹配数据的 keys
    const headerKeys= [];

    let headers = [];
    column.forEach((item,index)=>{
        let obj = {
            header: item.label, key:item.name, width: null
        }
        let maxArr = [autoWidthAction(item.label)]
        data.forEach(ite=>{
            let str = ite[item.name] ||''
            if(str){
                maxArr.push(autoWidthAction(str))
            }
        })
        obj.width = Math.max(...maxArr)+5
        // 设置列名、键和宽度
        headers.push(obj);
    })

    column.forEach(item => {
        if (item.children) {
            // 有 children 说明是多级表头，header name 需要两行
            item.children.forEach(child => {
                names1.push(item.label);
                names2.push(child.label);
                headerKeys.push(child.name);
            });
        } else {
            names1.push(item.label);
            names2.push(item.label);
            headerKeys.push(item.name);
        }
    });



    // 判断是否有 children, 有的话是两行表头
    const isMultiHeader = column.some(item => item.children);
    if(isMultiHeader){
        const rowHeader1 = worksheet.addRow(names1);
        const rowHeader2 = worksheet.addRow(names2);

        console.log('rowHeader1====',names1,names2,rowHeader1,rowHeader2)
        mergeColumnCell(headers, rowHeader1, rowHeader2, names1, names2, worksheet)
        // return

    }

    data.forEach((item: any) => {
        const rowData = headerKeys?.map(key => item[key]);
        const row = worksheet.addRow(rowData);
        // console.log('row--------',row)
    })
    // 写入文件
    workbook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data, { type: "application/vnd.ms-excel" }]);
        if (window.navigator.msSaveOrOpenBlob) {
            // msSaveOrOpenBlob方法返回boolean值
            navigator.msSaveBlob(blob, filename + ".xlsx");
            // 本地保存
        } else {
            const link = document.createElement("a"); // a标签下载
            link.href = window.URL.createObjectURL(blob); // href属性指定下载链接
            link.download = filename + ".xlsx"; // dowload属性指定文件名
            link.click(); // click()事件触发下载
            window.URL.revokeObjectURL(link.href); // 释放内存
        }
    });
}


function mergeColumnCell(headers, rowHeader1, rowHeader2, nameRow1, nameRow2, worksheet){
    // 当前 index 的指针
    let pointer = -1;
    nameRow1.forEach((name, index) => {
        // 当 index 小于指针时，说明这一列已经被合并过了，不能再合并
        if (index <= pointer) return;
        // 是否应该列合并
        const shouldVerticalMerge = name === nameRow2[index];


        // 是否应该行合并
        const shouldHorizontalMerge = index !== nameRow1.lastIndexOf(name);

        console.log('==',name,nameRow2[index],index,nameRow1.lastIndexOf(name),shouldVerticalMerge,shouldHorizontalMerge)

        pointer = nameRow1.lastIndexOf(name);
        if (shouldVerticalMerge && shouldHorizontalMerge) {
            // 两个方向都合并
            worksheet.mergeCells(
                Number(rowHeader1.number),
                index + 1,
                Number(rowHeader2.number),
                nameRow1.lastIndexOf(name) + 1,
            );
            console.log('==')
        } else if (shouldVerticalMerge && !shouldHorizontalMerge) {
            // 只在垂直方向上同一列的两行合并
            worksheet.mergeCells(Number(rowHeader1.number), index + 1, Number(rowHeader2.number), index + 1);
        } else if (!shouldVerticalMerge && shouldHorizontalMerge) {
            // 只有水平方向同一行的多列合并
            worksheet.mergeCells(
                Number(rowHeader1.number),
                index + 1,
                Number(rowHeader1.number),
                nameRow1.lastIndexOf(name) + 1,
            );
            // eslint-disable-next-line no-param-reassign
            const cell = rowHeader1.getCell(index + 1);
            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        }
    });

}
