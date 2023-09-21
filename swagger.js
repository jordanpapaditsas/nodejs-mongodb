const mongooseToSwagger = require('mongoose-to-swagger');
const User = require('./models/user.model');
const Product = require('./models/product.model');

exports.options = {
  'components': {
    'schemas': {
      User: mongooseToSwagger(User),
      Product: mongooseToSwagger(Product)
    }
  },
  'openapi': '3.1.0',
  'info': {
    'version': '1.0.0',
    'title': 'Products CRUD API',
    'description': 'Products Project Application',
  },
  'contact': {
    'name': 'API Support',
    'url': 'https://www.node-test-crud-app.com',
    'email': 'nodecrudapp@test.com'
  },
  'servers': [
    {
      url: 'http://localhost:3000',
      description: 'Local Server'
    },
    {
      url: 'https://www.example.com',
      description: 'Testing Server'
    }
  ],
  'tags': [
    {
      'name': 'Users',
      'description': 'API for users'
    },
    {
      'name': 'Products',
      'description': 'API for products'
    },
    {
      'name': 'Users and Products',
      'description': 'API for users and their products'
    }
  ],
  'paths': {
    '/api/users': {
      'get': {
        'tags': [
          'Users'
        ],
        'summary': 'Get all users',
        'responses': {
          '200': {
            'description': 'OK',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      }
    },
    '/api/users/{username}': {
      'get': {
        'tags': [
          'Users'
        ],
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'required': true,
            'description': 'Username of user that we want to find',
            'type': 'string'
          }
        ],
        'summary': 'Get user with specific username',
        'responses': {
          '200': {
            'description': 'User find',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      }
    },
    '/api/user-product': {
      'get': {
        'tags': [
          'Users and Products'
        ],
        'summary': 'Get all user-product',
        'responses': {
          '200': {
            'description': 'OK',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      }
    }
  }
};