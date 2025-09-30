import type React from 'react';
import { useState } from 'react';
import { Button, Space, Card, Avatar, message, Popconfirm, Row, Col, Pagination } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, ImportOutlined, ExportOutlined, UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import SupplierModal from '../SupplierModal';

interface SupplierData {
  key: string;
  name: string;
  email: string;
  contact: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  status: string;
  totalPurchases: number;
  avatar?: string;
}

const Suppliers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [editingSupplier, setEditingSupplier] = useState<SupplierData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [dataSource, setDataSource] = useState<SupplierData[]>([
    {
      key: '1',
      name: 'Duponteee',
      email: 'dupontee@example.com',
      contact: 'Michel Dupont',
      phone: '787-678-6043',
      city: 'Igylvif Bangangte',
      country: 'Cameroun',
      address: 'Quartier 6 Quartier 6',
      status: 'Actif',
      totalPurchases: 15750.00,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face'
    },
    {
      key: '2',
      name: 'TechWorld SARL',
      email: 'contact@techworld.fr',
      contact: 'Michel Leroy',
      phone: '01 23 45 67 89',
      city: 'Paris',
      country: 'France',
      address: '123 Avenue des Champs-Élysées',
      status: 'Actif',
      totalPurchases: 15750.00,
    },
    {
      key: '3',
      name: 'ElectroPlus',
      email: 'info@electroplus.fr',
      contact: 'Sarah Chen',
      phone: '04 56 78 90 12',
      city: 'Lyon',
      country: 'France',
      address: '456 Rue de la République',
      status: 'Actif',
      totalPurchases: 9800.50,
    },
    {
      key: '4',
      name: 'Accessoires Pro',
      email: 'commandes@accessoirespro.fr',
      contact: 'David Martin',
      phone: '02 34 56 78 90',
      city: 'Nantes',
      country: 'France',
      address: '789 Boulevard Saint-Germain',
      status: 'Inactif',
      totalPurchases: 0.00,
    },
    {
      key: '5',
      name: 'Digital Supply',
      email: 'ventes@digitalsupply.fr',
      contact: 'Emma Dubois',
      phone: '05 67 89 01 23',
      city: 'Bordeaux',
      country: 'France',
      address: '321 Cours Victor Hugo',
      status: 'Actif',
      totalPurchases: 22100.75,
    },
  ]);

  const handleCreate = () => {
    setModalMode('create');
    setEditingSupplier(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record: SupplierData) => {
    setModalMode('edit');
    setEditingSupplier(record);
    setIsModalOpen(true);
  };

  const handleDelete = (key: string) => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
    message.success('Fournisseur supprimé avec succès');
  };

  const handleModalSubmit = (values: Omit<SupplierData, 'key' | 'totalPurchases'>) => {
    if (modalMode === 'create') {
      const newSupplier: SupplierData = {
        ...values,
        key: Date.now().toString(),
        totalPurchases: 0,
      };
      setDataSource([...dataSource, newSupplier]);
    } else if (modalMode === 'edit' && editingSupplier) {
      const newData = dataSource.map(item =>
        item.key === editingSupplier.key ? { ...item, ...values } : item
      );
      setDataSource(newData);
    }
  };

  const handleExport = () => {
    message.success('Export des fournisseurs en cours...');
  };

  const handleImport = () => {
    message.info('Fonctionnalité d\'import à venir...');
  };

  const paginatedData = dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div style={{ padding: '0 24px 24px 24px' }}>
      {/* Header with action buttons */}
      <div style={{ 
        marginBottom: '24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <h2 style={{ margin: 0, color: '#1677ff', fontWeight: 'bold', fontSize: '28px' }}>Liste des fournisseurs</h2>
        <Space size="middle">
          <Button 
            icon={<ImportOutlined />} 
            onClick={handleImport}
            style={{ 
              background: '#faad14', 
              borderColor: '#faad14', 
              color: '#fff',
              fontWeight: '600',
              height: '40px',
              borderRadius: '8px'
            }}
          >
            Importer
          </Button>
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
            onClick={handleCreate}
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
      
      {/* Suppliers Grid */}
      <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
        {paginatedData.map((supplier) => (
          <Col xs={24} sm={12} lg={8} key={supplier.key}>
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
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <Avatar 
                  size={64} 
                  src={supplier.avatar}
                  icon={!supplier.avatar && <UserOutlined />}
                  style={{ 
                    background: supplier.avatar ? 'transparent' : 'linear-gradient(135deg, #1677ff 0%, #722ed1 100%)',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ 
                    margin: '0 0 4px 0', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#262626',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {supplier.name}
                  </h3>
                  <div style={{ 
                    display: 'inline-block',
                    background: supplier.status === 'Actif' ? '#f6ffed' : '#fff2e8',
                    color: supplier.status === 'Actif' ? '#52c41a' : '#faad14',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    border: `1px solid ${supplier.status === 'Actif' ? '#b7eb8f' : '#ffd591'}`
                  }}>
                    {supplier.status}
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <PhoneOutlined style={{ color: '#1677ff', fontSize: '14px' }} />
                  <span style={{ fontSize: '14px', color: '#595959' }}>{supplier.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MailOutlined style={{ color: '#1677ff', fontSize: '14px' }} />
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#595959',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {supplier.email}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <HomeOutlined style={{ color: '#1677ff', fontSize: '14px', marginTop: '2px' }} />
                  <div style={{ fontSize: '14px', color: '#595959', lineHeight: '1.4' }}>
                    <div>{supplier.address}</div>
                    <div>{supplier.city}</div>
                    <div>{supplier.country}</div>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <Button 
                    size="small" 
                    icon={<EditOutlined />} 
                    onClick={() => handleEdit(supplier)}
                    style={{ 
                      color: '#1677ff', 
                      borderColor: '#1677ff',
                      background: 'transparent',
                      fontWeight: '500'
                    }}
                  >
                    Modifier
                  </Button>
                  <Popconfirm
                    title="Êtes-vous sûr de vouloir supprimer ce fournisseur?"
                    onConfirm={() => handleDelete(supplier.key)}
                    okText="Oui"
                    cancelText="Non"
                  >
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
                  </Popconfirm>
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
        ))}
      </Row>
      
      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <Pagination
          current={currentPage}
          total={dataSource.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
          style={{ marginBottom: '20px' }}
        />
      </div>
      
      <SupplierModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        editingSupplier={editingSupplier}
        mode={modalMode}
      />
    </div>
  );
};

export default Suppliers;
