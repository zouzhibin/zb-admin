import ExcelJS from 'exceljs'
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
export const exportExcel = async ({column,data,filename,autoWidth,format})=>{
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
    const columnsName = [];
    column.forEach((item,index)=>{
        const obj = {
            header: item.label, key:item.name, width: null
        }
        if(autoWidth){
            const maxArr = [autoWidthAction(item.label)]
            data.forEach(ite=>{
                const str = ite[item.name] ||''
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

    const uint8Array =
        format === "xlsx"
            ? await workbook.xlsx.writeBuffer()
            : await workbook.csv.writeBuffer();

    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    if (window.navigator.msSaveOrOpenBlob) {
        // msSaveOrOpenBlob方法返回boolean值
        navigator.msSaveBlob(blob, filename + `.${format}`);
        // 本地保存
    } else {
        const link = document.createElement("a"); // a标签下载
        link.href = window.URL.createObjectURL(blob); // href属性指定下载链接
        link.download = filename + `.${format}`; // dowload属性指定文件名
        link.click(); // click()事件触发下载
        window.URL.revokeObjectURL(link.href); // 释放内存
    }
}
export function addCellStyle(cell,  attr) {
    const {color, fontSize, horizontal, bold} = attr || {};
    // eslint-disable-next-line no-param-reassign
    cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: color},
    };
    // eslint-disable-next-line no-param-reassign
    cell.font = {
        bold: bold ?? true,
        size: fontSize ?? 11,
        // italic: true,
        // name: '微软雅黑',
        color: {argb: 'ff0000'},
    };
    // eslint-disable-next-line no-param-reassign
    cell.alignment = {vertical: 'middle', wrapText: true, horizontal: horizontal ?? 'left'};
}

export const exportStyleExcel =async ({column,data,filename,autoWidth,format})=>{
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
    const columnsName = [];
    column.forEach((item,index)=>{
        const obj = {
            header: item.label, key:item.name, width: null
        }
        if(autoWidth){
            const maxArr = [autoWidthAction(item.label)]
            data.forEach(ite=>{
                const str = ite[item.name] ||''
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

    // 设置表头颜色
    // 给表头添加背景色。因为表头是第一行，可以通过 getRow(1) 来获取表头这一行
    const headerRow = worksheet.getRow(1);
    // 通过 cell 设置样式，更精准
    headerRow.eachCell((cell) => addCellStyle(cell, {color: 'dff8ff', fontSize: 12, horizontal: 'left'}));

    const uint8Array =
        format === "xlsx"
            ? await workbook.xlsx.writeBuffer()
            : await workbook.csv.writeBuffer();

    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    if (window.navigator.msSaveOrOpenBlob) {
        // msSaveOrOpenBlob方法返回boolean值
        navigator.msSaveBlob(blob, filename + `.${format}`);
        // 本地保存
    } else {
        const link = document.createElement("a"); // a标签下载
        link.href = window.URL.createObjectURL(blob); // href属性指定下载链接
        link.download = filename + `.${format}`; // dowload属性指定文件名
        link.click(); // click()事件触发下载
        window.URL.revokeObjectURL(link.href); // 释放内存
    }
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
    const sheet = workbook.addWorksheet("sheet1");

    // 添加表头
    sheet.getRow(1).values = ["序号", "日期","地址" ,"配送消息"  ,,, ];
    sheet.getRow(2).values = [
        "序号",
        "日期",
        "地址",
        "省份",
        "城市",
        "邮编"
    ];
    const headers = [];
    column.forEach((item,index)=>{
        if(item.children){
            item.children.forEach(itemChild=>{
                const obj = {
                    key:itemChild.name, width: null
                }
                const maxArr = [autoWidthAction(itemChild.label)]
                data.forEach(ite=>{
                    const str = ite[itemChild.name] ||''
                    if(str){
                        maxArr.push(autoWidthAction(str))
                    }
                })
                obj.width = Math.max(...maxArr)+5
                // 设置列名、键和宽度
                headers.push(obj);
            })

        }else {
            const obj = {
                key:item.name, width: null
            }
            const maxArr = [autoWidthAction(item.label)]
            data.forEach(ite=>{
                const str = ite[item.name] ||''
                if(str){
                    maxArr.push(autoWidthAction(str))
                }
            })
            obj.width = Math.max(...maxArr)+5
            // 设置列名、键和宽度
            headers.push(obj);
        }
    })
    sheet.columns = headers;
    sheet.addRows(data);

   // 合并单元格
    sheet.mergeCells(`D1:F1`);
    sheet.mergeCells("A1:A2");
    sheet.mergeCells("B1:B2");
    sheet.mergeCells("C1:C2");
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
