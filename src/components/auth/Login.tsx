import React, { useState } from 'react';
import { Form, Input, Button, Card, message, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  
  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Login attempt:', values);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password
      if (values.email && values.password) {
        message.success('Connexion réussie!');
        // TODO: Redirect to dashboard or update auth state
        window.location.href = '/dashboard';
      } else {
        message.error('Veuillez remplir tous les champs');
      }
    } catch (error) {
      message.error('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = () => {
    // TODO: Navigate to registration page or show registration modal
    console.log('Navigate to registration');
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
          maxWidth: '400px',
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
            Se connecter
          </Title>
          <Text style={{ color: '#8c8c8c', fontSize: '16px' }}>
            Accédez à votre espace de gestion
          </Text>
        </div>

        {/* Login Form */}
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
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
              size="large"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9',
                fontSize: '16px'
              }}
            />
          </Form.Item>

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
              placeholder="Votre mot de passe"
              size="large"
              style={{
                borderRadius: '8px',
                border: '1px solid #d9d9d9',
                fontSize: '16px'
              }}
            />
          </Form.Item>

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
              <UserOutlined style={{ marginRight: '8px' }} />
              Se connecter
            </Button>
          </Form.Item>

          {/* Register Link */}
          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#8c8c8c' }}>
              Pas encore de compte?{' '}
              <Button
                type="link"
                onClick={handleRegisterClick}
                style={{
                  padding: 0,
                  height: 'auto',
                  color: '#1677ff',
                  fontWeight: '600'
                }}
              >
                S'inscrire
              </Button>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
