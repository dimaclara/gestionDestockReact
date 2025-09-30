import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const StockMovements: React.FC = () => {
  const stockItems = [
    {
      id: 1,
      codeArticle: 'ART001',
      designation: 'Article de test',
      prixHT: '150.00',
      prixTTC: '179.50',
      stockActuel: 139
    },
    {
      id: 2,
      codeArticle: 'ART002',
      designation: 'Article de test 2',
      prixHT: '200.00',
      prixTTC: '239.00',
      stockActuel: 85
    }
  ];

  return (
    <div style={{ padding: '24px', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#333' }}>
          Mouvements du stock
        </h2>
        <Button 
          type="primary" 
          icon={<DownloadOutlined />}
          style={{
            background: '#52c41a',
            borderColor: '#52c41a',
            borderRadius: '6px',
            fontWeight: 600
          }}
        >
          Exporter
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {stockItems.map(item => (
          <Card
            key={item.id}
            style={{
              borderRadius: '8px',
              border: '1px solid #e8e8e8',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={8} md={6}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#ffa940',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\'/%3E%3C/svg%3E") center/contain no-repeat'
                  }} />
                </div>
              </Col>
              
              <Col xs={24} sm={8} md={10}>
                <div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: '#1890ff', fontSize: '12px', fontWeight: 500 }}>●</span>
                    <span style={{ marginLeft: '8px', fontSize: '14px', color: '#333' }}>
                      Code article: {item.codeArticle}
                    </span>
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: '#1890ff', fontSize: '12px', fontWeight: 500 }}>●</span>
                    <span style={{ marginLeft: '8px', fontSize: '14px', color: '#333' }}>
                      {item.designation}
                    </span>
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: '#1890ff', fontSize: '12px', fontWeight: 500 }}>$</span>
                    <span style={{ marginLeft: '8px', fontSize: '14px', color: '#333' }}>
                      prix HT: {item.prixHT} €
                    </span>
                  </div>
                  <div>
                    <span style={{ color: '#1890ff', fontSize: '12px', fontWeight: 500 }}>$</span>
                    <span style={{ marginLeft: '8px', fontSize: '14px', color: '#333' }}>
                      prix TTC: {item.prixTTC} €
                    </span>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={8} md={6}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                    Stock actuel
                  </div>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
                    {item.stockActuel}
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={24} md={2}>
                <div style={{ textAlign: 'center' }}>
                  <Button 
                    type="link" 
                    style={{ 
                      color: '#1890ff', 
                      fontSize: '14px', 
                      fontWeight: 500,
                      padding: '4px 8px'
                    }}
                  >
                    🔧 Correction de stock
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <div style={{ display: 'inline-flex', gap: '8px' }}>
          <Button size="small" disabled>⟪</Button>
          <Button size="small" disabled>⟨</Button>
          <Button size="small" type="primary">1</Button>
          <Button size="small">2</Button>
          <Button size="small">3</Button>
          <Button size="small">4</Button>
          <Button size="small">5</Button>
          <Button size="small">6</Button>
          <Button size="small">⟩</Button>
          <Button size="small">⟫</Button>
        </div>
      </div>
    </div>
  );
};

export default StockMovements;
