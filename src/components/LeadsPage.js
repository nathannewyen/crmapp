import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin, Button, message } from 'antd';
import { fetchLeads, addLead, updateLead, deleteLead } from '../hooks/leadSlice';

const LeadsPage = () => {
    const dispatch = useDispatch();
    const { loading, leads  } = useSelector((state) => state.leads);
    const page = 1

    useEffect(() => {
        dispatch(fetchLeads(page));
    }, [dispatch, page]);

    const handleAdd = () => {
        const newLead = {
            name: 'Testing',
            job: 'Engineer',
        };
        dispatch(addLead(newLead));
        message.success('Lead added successfully');
    };

    const handleUpdate = (lead) => {
        dispatch(updateLead(lead));
    };

    const handleDelete = (id) => {
        dispatch(deleteLead(id));
        message.success('Lead deleted successfully');
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (lead) => (
                <span>
          <Button type="primary" onClick={() => handleUpdate(lead)}>
            Update
          </Button>
          <Button type="danger" style={{ marginLeft: 10 }} onClick={() => handleDelete(lead.id)}>
            Delete
          </Button>
        </span>
            ),
        },
    ];

    return (
        <div>
            {loading ? (
                <Spin />
            ) : (
                <Table
                    columns={columns}
                    dataSource={leads.data}
                    pagination={false}
                />
            )}
            <Button type="primary" onClick={handleAdd}>
                Add Lead
            </Button>
        </div>
    );
};

export default LeadsPage;