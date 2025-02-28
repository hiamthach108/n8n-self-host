import type { INodeProperties } from 'n8n-workflow';

export const solumCreateUserOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['createUser'],
		},
	},
	options: [
		{
			name: 'CreateUser',
			value: 'createUser',
			description: 'Create new User',
			action: 'Create new User',
		},
	],
	default: 'createUser',
};

export const solumCreateUserProperties: INodeProperties[] = [
	{
		displayName: 'CreateUser',
		name: 'createuser',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['createUser'],
				operation: ['createUser'],
			},
		},
		default: '',
		required: true,
		description: 'Input your user data',
	},
];

export const solumCreateUserDescription = {
	operations: solumCreateUserOperations,
	properties: solumCreateUserProperties,
};
