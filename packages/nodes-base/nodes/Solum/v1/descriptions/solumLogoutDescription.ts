import type { INodeProperties } from 'n8n-workflow';

export const solumLogoutOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['logout'],
		},
	},
	options: [
		{
			name: 'Logout',
			value: 'logout',
			description: 'Logout user',
			action: 'Logout user',
		},
	],
	default: 'logout',
};

export const solumLogoutProperties: INodeProperties[] = [
	{
		displayName: 'Logout',
		name: 'logout',
		type: 'string',
		placeholder: 'User ID',
		displayOptions: {
			show: {
				resource: ['logout'],
				operation: ['logout'],
			},
		},
		default: '',
		required: true,
		description: 'Input your user ID',
	},
];

export const solumLogoutDescription = {
	operations: solumLogoutOperations,
	properties: solumLogoutProperties,
};
