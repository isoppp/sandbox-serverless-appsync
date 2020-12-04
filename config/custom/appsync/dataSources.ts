export const dataSources = [
  {
    type: 'AMAZON_DYNAMODB',
    name: 'Todo',
    description: 'Todo Table',
    config: {
      tableName: {
        Ref: 'todosTable',
      },
      versioned: false,
    },
  },
]
