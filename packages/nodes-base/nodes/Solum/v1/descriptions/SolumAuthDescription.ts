import type { INodeProperties } from 'n8n-workflow';

export const solumAuthOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['auth'],
		},
	},
	options: [
		{
			name: 'Login By Email',
			value: 'email',
			action: 'Login by email',
		},
		{
			name: 'Login By Google',
			value: 'google',
			action: 'Login by google',
		},
		{
			name: 'Login By Github',
			value: 'github',
			action: 'Login by github',
		},
	],
	default: 'email',
};

export const SolumAuthProperties: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['auth'],
				operation: ['email'],
			},
		},
		default: '',
		description: 'Input your email',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['auth'],
				operation: ['email'],
			},
		},
		default: '',
		description: 'Input your password',
	},
];

export const solumAuthDescription = {
	operations: solumAuthOperations,
	properties: SolumAuthProperties,
};
