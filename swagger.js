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
        'description': 'Returns all users',
        'responses': {
          '200': {
            'description': 'A list of users.',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/User'
                  }
                }
              }
            }
          }
        }
      },
      'post': {
        'tags': [
          'Users'
        ],
        'description': 'Create a new user',
        'requestBody': {
          'description': 'User that we want to create',
          'content': {
            // 'application/x-www-form-urlencoded': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'username': { 'type': 'string' },
                  'password': { 'type': 'string' },
                  'name': { 'type': 'string' },
                  'surname': { 'type': 'string' },
                  'email': { 'type': 'string' },
                  'address': {
                    'type': 'object',
                    'properties': {
                      'area': { 'type': 'string' },
                      'road': { 'type': 'string' }
                    }
                  },
                  'phone': {
                    'type': 'array',
                    'items': {
                      'type': 'object',
                      'properties': {
                        'type': { 'type': 'string' },
                        'number': { 'type': 'string' }
                      }
                    }
                  }
                },
                'required': [ 'username', 'password', 'email' ]
              }
            }
          }
        },
        'responses': {
          '200': {
            'description': 'New user is created successfully'
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
        'description': 'Get user with specific username, field description',
        'summary': 'Summary details',
        'responses': {
          '200': {
            'description': 'User find',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      },
      'patch': {
        'tags': [
          'Users'
        ],
        'description': 'Update a user',
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'required': true,
            'description': 'Username of user that we want to update',
            'type': 'string'
          }
        ],
        'requestBody': {
          'description': 'Data of user that we want to update',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'username': { 'type': 'string' },
                  'name': { 'type': 'string' },
                  'surname': { 'type': 'string' },
                  'email': { 'type': 'string' },
                  'address': {
                    'type': 'object',
                    'properties': {
                      'area': { 'type': 'string' },
                      'road': { 'type': 'string' }
                    }
                  },
                  'phone': {
                    'type': 'array',
                    'items': {
                      'type': 'object',
                      'properties': {
                        'type': { 'type': 'string' },
                        'number': { 'type': 'string' }
                      }
                    }
                  }
                },
                'required': ['email']
              }
            }
          }
        },
        'responses': {
          '200': {
            'description': 'User updated',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      },
      'delete': {
        'tags': [
          'Users'
        ],
        'description': 'Delete a user',
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'description': 'Username of user that we want to delete',
            'schema': { 
              '$ref': '#/components/schemas/User'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Deleted a user successfully'
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
        'description': 'All user\s products',
        'responses': {
          '200': {
            'description': 'OK',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      },
      'post': {
        'tags': [
          'Users and Products'
        ],
        'description': 'Add a new product for user',
        'requestBody': {
          'description': 'User that we want to add the product',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'username': { 'type': 'string' },
                  'products': {
                    'type': 'array',
                    'items': {
                      'type': 'objects',
                      'properties': {
                        'product': { 'type': 'string' },
                        'cost': { 'type': 'number' },
                        'quantity': { 'type': 'number' }
                      }
                    }
                  }
                },
                'required': ['quantity']
              }
            }
          }
        },
        'responses': {
          '200': {
            'description': 'New product is added'
          }
        }
      }
    },
    '/api/user-product/{username}': {
      'get': {
        'tags': [
          'Users and Products'
        ],
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'required': true,
            'description': 'User\'s username to find products',
            'type': 'string'
          }
        ],
        'description': 'Description Text',
        'summary': 'Summary Text',
        'responses': {
          '200': {
            'description': 'User\s products',
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      },
      'patch': {
        'tags': [
          'Users and Products'
        ],
        'description': 'Update user\s product',
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'required': true,
            'description': 'User\'s username to find products',
            'type': 'string'
          }
        ],
        'requestBody': {
          'description': 'Description for requestBody',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'username': { 'type': 'string' },
                  'product': { 
                    'type': 'object',
                    'properties': {
                      '_id': { 'type': 'string' },
                      'quantity': { 'type': 'number' }
                    }  
                  }
                },
                'required': ['quantity']
              }
            }
          }
        },
        'responses': {
          '200': {
            'description': 'Description for responses'
          }
        }
      }
    },
    '/api/user-product/{username}/products/{product}': {
      'delete': {
        'tags': [
          'Users and Products'
        ],
        'description': 'Description for delete',
        'parameters': [
          {
            'name': 'username',
            'in': 'path',
            'description': 'Username to find',
            'required': true
          },
          {
            'name': 'product',
            'in': 'path',
            'description': 'product name to delete',
            'required': true
          }
        ],
        'responses': {
          '200': {
            'description': 'Product deleted'
          }
        }
      }
    }
  }
};