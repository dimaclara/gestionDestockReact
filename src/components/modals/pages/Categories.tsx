import React, { useState } from 'react';
import { Button, Space, Card, message, Popconfirm, Pagination } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';

interface Category {
  key: string;
  code: string;
  designation: string;
}

const Categories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  
  const [categories, setCategories] = useState<Category[]>([
    {
      key: '1',
      code: 'code1',
      designation: 'designation1'
    },
    {
      key: '2',
      code: 'code2', 
      designation: 'description2'
    },
    {
      key: '3',
      code: 'ELEC',
      designation: 'Électronique'
    },
    {
      key: '4',
      code: 'ACCESS',
      designation: 'Accessoires'
    },
    {
      key: '5',
      code: 'MOBIL',
      designation: 'Mobilier'
    },
  ]);

  const handleExport = () => {
    message.success('Export des catégories en cours...');
  };

  const handleImport = () => {
    message.info('Fonctionnalité d\'import à venir...');
  };

  const handleDelete = (key: string) => {
    setCategories(categories.filter(cat => cat.key !== key));
    message.success('Catégorie supprimée avec succès!');
  };

  const paginatedData = categories.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
        <h2 style={{ margin: 0, color: '#1677ff', fontWeight: 'bold', fontSize: '28px' }}>Liste des catégories</h2>
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

      {/* Categories Table */}
      <Card
        style={{
          borderRadius: '12px',
          border: '1px solid #f0f0f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
        bodyStyle={{ padding: 0 }}
      >
        {paginatedData.map((category, index) => (
          <div
            key={category.key}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '20px 24px',
              borderBottom: index < paginatedData.length - 1 ? '1px solid #f0f0f0' : 'none',
              transition: 'background-color 0.2s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fafafa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {/* Code */}
            <div style={{
              flex: '0 0 200px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#262626'
            }}>
              {category.code}
            </div>

            {/* Designation */}
            <div style={{
              flex: '1',
              fontSize: '16px',
              color: '#595959',
              marginRight: '20px'
            }}>
              {category.designation}
            </div>

            {/* Actions */}
            <div style={{ flex: '0 0 auto' }}>
              <Space size="middle">
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
                <Popconfirm
                  title="Êtes-vous sûr de vouloir supprimer cette catégorie?"
                  onConfirm={() => handleDelete(category.key)}
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
                <Button
                  size="small"
                  icon={<EyeOutlined />}
                  type="text"
                  style={{ color: '#52c41a', fontWeight: '500' }}
                >
                  Détails
                </Button>
              </Space>
            </div>
          </div>
        ))}

        {paginatedData.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#8c8c8c',
            fontSize: '16px'
          }}>
            Aucune catégorie trouvée
          </div>
        )}
      </Card>

      {/* Pagination */}
      {categories.length > pageSize && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <Pagination
            current={currentPage}
            total={categories.length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            style={{ marginBottom: '20px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
