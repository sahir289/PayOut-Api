import { Table } from 'antd';
import React from 'react';
import { formatTimestamp } from '../../utils/utils';
const { Column } = Table;

const DataTable = (props) => {

    const { fileData } = props;
    console.log("🚀 ~ DataTable ~ fileData:", fileData)


    return (
        <>
            <Table
                dataSource={fileData}
                className="table-global"
                pagination={{
                    pageSize: 10,
                }}
                scroll={{
                    x: '400px',
                    y: 485,
                }}
                rowKey={(record, index) => index}
            >
                <Column
                    title="Sno"
                    key="index"
                    className="bg-white"
                    render={(text, record, index) => index + 1}
                    width={"60px"}
                />
                <Column
                    title="Beneficiary Name"
                    dataIndex="beneficiaryName"
                    width={"170px"}
                    key="beneficiaryName"
                    className="bg-white"
                />
                <Column
                    title="Destination Bank"
                    dataIndex="destinationBank"
                    key="destinationBank"
                    // width={"12%"}
                    width={"170px"}
                    className="bg-white"
                />
                <Column
                    title="Destination Account Number"
                    dataIndex="destinationAccountNumber"
                    key="destinationAccountNumber"
                    className="bg-white"
                    // width={"13%"}
                    width={"170px"}
                />
                <Column
                    title="IFSC"
                    dataIndex="destinationBankIfsc"
                    key="destinationBankIfsc"
                    className="bg-white"
                    // width={"11%"}
                    width={"170px"}
                />

                <Column
                    title="Amount"
                    dataIndex="amount"
                    key="amount"
                    className="bg-white"
                    // width={"6%"}
                    width={"100px"}

                />
                <Column
                    title="Currency"
                    dataIndex="currency"
                    key="currency"
                    className="bg-white"
                    // width={"6%"}
                    width={"100px"}
                />
                <Column
                    title="UTR"
                    dataIndex="response"
                    key="response"
                    className="bg-white"
                    // width={"8%"}
                    width={"170px"}
                    render={(values, data) => {
                        console.log("🚀 ~ DataTable ~ values:", values)
                        return (
                            <>
                                <div> {values?.status === "SUCCESS" && values?.utr}</div>
                            </>
                        )
                    }}
                />
                <Column
                    title="Mode"
                    dataIndex="mode"
                    key="mode"
                    className="bg-white"
                    // width={"8%"}
                    width={"100px"}
                />
                <Column
                    title="Time"
                    dataIndex="createdAt"
                    key="createdAt"
                    className="bg-white"
                    // width={"15%"}
                    width={"170px"}
                    render={(values, data) => {
                        console.log("🚀 ~ DataTable ~ values:", values)
                        return (
                            <>
                                {/* <div> {values?.status === "SUCCESS" && values?.utr}</div> */}
                                <div>{formatTimestamp(values)}</div>
                            </>
                        )
                    }}
                />
                <Column
                    title="Response"
                    dataIndex="response"
                    key="response"
                    className="bg-white"
                    // width={"10%"}
                    width={"130px"}
                    render={(values, data) => {
                        console.log("🚀 ~ DataTable ~ values:", values)
                        return (
                            <>
                                <div> {values?.status === "SUCCESS" ? <div className='bg-green-400 font bold text-center p-2 text-white'>{values?.status}</div> : <div className='bg-red-400 font bold text-center p-1'>{values?.status}</div>} </div>
                            </>
                        )
                    }}
                />
                <Column
                    title="Remarks"
                    dataIndex="response"
                    key="response"
                    className="bg-white"
                    // width={"10%"}
                    width={"170px"}
                    render={(values, data) => {
                        console.log("🚀 ~ DataTable ~ values:", values)
                        return (
                            <>
                                <div> {values?.status === "ERROR" &&
                                    <>
                                        <div>{JSON.stringify(values?.message)}</div>

                                    </>} </div>
                            </>
                        )
                    }}
                />
            </Table>
        </>
    )
}

export default DataTable