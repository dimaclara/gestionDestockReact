import React, { useState } from 'react';
import { Form, Input, Button, Card, message, Typography, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, BankOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface RegisterFormValues {
  name: string;
  fiscalCode: string;
  email: string;
  address1: string;
  address2?: string;
  city: string;
  postalCode: string;
  country: string;
  description?: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  
  const onFinish = async (values: RegisterFormValues) => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Registration attempt:', values);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, accept registration
      message.success('Inscription réussie! Vous pouvez maintenant vous connecter.');
      
      // TODO: Redirect to login or auto-login
      setTimeout(() => {
        handleLoginClick();
      }, 1500);
      
    } catch (error) {
      message.error('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = () => {
    // TODO: Navigate to login page
    console.log('Navigate to login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: 'none'
        }}
        bodyStyle={{ padding: '40px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #1677ff 0%, #722ed1 100%)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            GS
          </div>
          <Title level={2} style={{ margin: '0 0 8px 0', color: '#262626' }}>
            S'inscrire
          </Title>
          <Text style={{ color: '#8c8c8c', fontSize: '16px' }}>
            Créez votre compte pour accéder au système
          </Text>
        </div>

        {/* Registration Form */}
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nom"
                rules={[
                  { required: true, message: 'Veuillez entrer votre nom!' },
                  { min: 2, message: 'Le nom doit contenir au moins 2 caractères!' }
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#8c8c8c' }} />}
                  placeholder="Votre nom complet"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="fiscalCode"
                label="Code fiscal"
                rules={[
                  { required: true, message: 'Veuillez entrer votre code fiscal!' }
                ]}
              >
                <Input
                  prefix={<BankOutlined style={{ color: '#8c8c8c' }} />}
                  placeholder="Code fiscal"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              { required: true, message: 'Veuillez entrer votre email!' },
              { type: 'email', message: 'Format email invalide!' }
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: '#8c8c8c' }} />}
              placeholder="votre.email@exemple.com"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9'
              }}
            />
          </Form.Item>

          <Form.Item
            name="address1"
            label="Adresse 1"
            rules={[
              { required: true, message: 'Veuillez entrer votre adresse!' }
            ]}
          >
            <Input
              prefix={<HomeOutlined style={{ color: '#8c8c8c' }} />}
              placeholder="Adresse principale"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9'
              }}
            />
          </Form.Item>

          <Form.Item
            name="address2"
            label="Adresse 2"
          >
            <Input
              prefix={<HomeOutlined style={{ color: '#8c8c8c' }} />}
              placeholder="Complément d'adresse (optionnel)"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9'
              }}
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="city"
                label="Ville"
                rules={[
                  { required: true, message: 'Veuillez entrer la ville!' }
                ]}
              >
                <Input
                  placeholder="Ville"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="postalCode"
                label="Code postal"
                rules={[
                  { required: true, message: 'Veuillez entrer le code postal!' }
                ]}
              >
                <Input
                  placeholder="Code postal"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="country"
                label="Pays"
                rules={[
                  { required: true, message: 'Veuillez entrer le pays!' }
                ]}
              >
                <Input
                  placeholder="Pays"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="Description"
          >
            <Input.TextArea
              rows={3}
              placeholder="Description (optionnel)"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9'
              }}
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Numéro de téléphone"
            rules={[
              { required: true, message: 'Veuillez entrer votre numéro de téléphone!' }
            ]}
          >
            <Input
              prefix={<PhoneOutlined style={{ color: '#8c8c8c' }} />}
              placeholder="+33 1 23 45 67 89"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9'
              }}
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Mot de passe"
                rules={[
                  { required: true, message: 'Veuillez entrer votre mot de passe!' },
                  { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères!' }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#8c8c8c' }} />}
                  placeholder="Mot de passe"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="confirmPassword"
                label="Confirmer le mot de passe"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Veuillez confirmer votre mot de passe!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Les mots de passe ne correspondent pas!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#8c8c8c' }} />}
                  placeholder="Confirmer le mot de passe"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #d9d9d9'
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ marginBottom: '24px' }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              block
              style={{
                height: '48px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1677ff 0%, #722ed1 100%)',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(22,119,255,0.3)'
              }}
            >
              S'inscrire
            </Button>
          </Form.Item>

          {/* Login Link */}
          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#8c8c8c' }}>
              Déjà un compte?{' '}
              <Button
                type="link"
                onClick={handleLoginClick}
                style={{
                  padding: 0,
                  height: 'auto',
                  color: '#1677ff',
                  fontWeight: '600'
                }}
              >
                Se connecter
              </Button>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
