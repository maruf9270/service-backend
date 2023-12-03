"use client";
import { ExclamationCircleFilled, SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { InputRef, Modal } from "antd";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { useGetfaqsQuery } from "@/redux/api/faq/faqslice";

interface DataType {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

type DataIndex = keyof DataType;

const App: React.FC = () => {
  const [id, setId] = useState("");
  const handleDelete = () => {};
  const { confirm } = Modal;

  const showConfirm = (_id: string) => {
    confirm({
      title: "Are you sure? You want to delete the faq",
      icon: <ExclamationCircleFilled></ExclamationCircleFilled>,
      content:
        "Once deleted This cannot be undone. Please be sure before delete this.",
      onOk() {
        console.log(id);
      },
      onCancel() {
        setId("");
      },
    });
  };

  const hanldeEdit = (data: string) => {};
  const { data: fdata, isLoading } = useGetfaqsQuery(undefined);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? searchText : text),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "30%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, { _id }) => {
        return (
          <>
            <Button danger onClick={() => showConfirm(_id)}>
              Delete
            </Button>

            <Button onClick={() => hanldeEdit(_id)}>Edit</Button>
          </>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={fdata?.data} />;
};

export default App;
