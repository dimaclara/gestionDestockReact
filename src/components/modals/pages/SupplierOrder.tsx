import React from 'react';
import { Button, Space, Card, Avatar, Row, Col, Pagination, message } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, ExportOutlined, UserOutlined, CalendarOutlined, ShoppingOutlined } from '@ant-design/icons';

const SupplierOrders: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 6;

  const handleExport = () => {
    message.success('Export des commandes en cours...');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'EN_PREPARATION': return { bg: '#fff7e6', color: '#faad14', border: '#ffd591' };
      case 'CONFIRMEE': return { bg: '#e6f0ff', color: '#1677ff', border: '#91caff' };
      case 'EN_TRANSIT': return { bg: '#f6ffed', color: '#52c41a', border: '#b7eb8f' };
      case 'LIVREE': return { bg: '#f6ffed', color: '#52c41a', border: '#b7eb8f' };
      case 'ANNULEE': return { bg: '#fff2f0', color: '#ff4d4f', border: '#ffb3b3' };
      default: return { bg: '#f5f5f5', color: '#8c8c8c', border: '#d9d9d9' };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'EN_PREPARATION': return 'En préparation';
      case 'CONFIRMEE': return 'Confirmée';
      case 'EN_TRANSIT': return 'En transit';
      case 'LIVREE': return 'Livrée';
      case 'ANNULEE': return 'Annulée';
      default: return status;
    }
  };

  const data = [
    {
      key: '1',
      orderNumber: 'code1',
      supplierName: 'Duponteee',
      supplierContact: 'new',
      supplierPhone: '787-678-6043',
      orderDate: '2025-05-',
      amount: '20T19.36,37.4563877',
      status: 'EN_PREPARATION',
      totalItems: 0,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      key: '2',
      orderNumber: 'ACH002',
      supplierName: 'TechWorld SARL',
      supplierContact: 'Michel Leroy',
      supplierPhone: '01 23 45 67 89',
      orderDate: '2024-12-15',
      amount: '1800.50',
      status: 'EN_TRANSIT',
      totalItems: 5
    },
    {
      key: '3',
      orderNumber: 'ACH003',
      supplierName: 'ElectroPlus',
      supplierContact: 'Sarah Chen',
      supplierPhone: '04 56 78 90 12',
      orderDate: '2024-12-10',
      amount: '3200.75',
      status: 'CONFIRMEE',
      totalItems: 8
    },
    {
      key: '4',
      orderNumber: 'ACH004',
      supplierName: 'Digital Supply',
      supplierContact: 'Emma Dubois',
      supplierPhone: '05 67 89 01 23',
      orderDate: '2024-12-05',
      amount: '950.00',
      status: 'LIVREE',
      totalItems: 3
    }
  ];

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div style={{ padding: '0 24px 24px 24px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <h2 style={{ margin: 0, color: '#1677ff', fontWeight: 'bold', fontSize: '28px' }}>Commande fournisseurs</h2>
        <Space size="middle">
          <Button
            icon={<ExportOutlined />}
            onClick={handleExport}
            style={{
              background: '#52c41a',
              borderColor: '#52c41a',
              color: '#fff',
              fontWeight: '600',
              height: '40px',
              borderRadius: '8px'
            }}
          >
            Exporter
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{
              background: '#1677ff',
              borderColor: '#1677ff',
              fontWeight: '600',
              height: '40px',
              borderRadius: '8px'
            }}
          >
            Nouveau
          </Button>
        </Space>
      </div>

      {/* Orders Grid */}
      <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
        {paginatedData.map((order) => {
          const statusStyle = getStatusColor(order.status);
          return (
            <Col xs={24} lg={12} key={order.key}>
              <Card
                hoverable
                style={{
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '24px' }}
              >
                {/* Supplier Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <Avatar
                    size={48}
                    src={order.avatar}
                    icon={!order.avatar && <UserOutlined />}
                    style={{
                      background: order.avatar ? 'transparent' : '#faad14',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#262626'
                    }}>
                      {order.supplierName}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#8c8c8c' }}>{order.supplierContact}</div>
                    <div style={{ fontSize: '12px', color: '#8c8c8c' }}>{order.supplierPhone}</div>
                  </div>
                </div>

                {/* Order Details */}
                <div style={{ marginBottom: '16px' }}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <ShoppingOutlined style={{ color: '#1677ff', fontSize: '14px' }} />
                        <span style={{ fontSize: '14px', fontWeight: '500', color: '#262626' }}>{order.orderNumber}</span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <CalendarOutlined style={{ color: '#1677ff', fontSize: '14px' }} />
                        <span style={{ fontSize: '14px', color: '#595959' }}>{order.orderDate}</span>
                      </div>
                    </Col>
                  </Row>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1677ff',
                    marginBottom: '8px'
                  }}>
                    {order.amount} FCFA
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: statusStyle.bg,
                    color: statusStyle.color,
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: '500',
                    border: `1px solid ${statusStyle.border}`
                  }}>
                    {getStatusText(order.status)}
                  </div>
                </div>

                {/* Command Lines Summary */}
                <div style={{
                  background: '#fafafa',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '14px', color: '#8c8c8c', marginBottom: '4px' }}>Lignes de commande</div>
                  <div style={{ fontSize: '16px', fontWeight: '500', color: '#262626' }}>
                    {order.totalItems} articles - Total commande: {order.amount.split('.')[0]} FCFA
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Space>
                    <Button
                      size="small"
                      icon={<EditOutlined />}
                      style={{
                        color: '#1677ff',
                        borderColor: '#1677ff',
                        background: 'transparent',
                        fontWeight: '500'
                      }}
                    >
                      Modifier
                    </Button>
                    <Button
                      size="small"
                      icon={<DeleteOutlined />}
                      style={{
                        color: '#ff4d4f',
                        borderColor: '#ff4d4f',
                        background: 'transparent',
                        fontWeight: '500'
                      }}
                    >
                      Supprimer
                    </Button>
                  </Space>
                  <Button
                    size="small"
                    icon={<EyeOutlined />}
                    type="text"
                    style={{ color: '#52c41a', fontWeight: '500' }}
                  >
                    Détails
                  </Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
          style={{ marginBottom: '20px' }}
        />
      </div>
    </div>
  );
};

export default SupplierOrders;
