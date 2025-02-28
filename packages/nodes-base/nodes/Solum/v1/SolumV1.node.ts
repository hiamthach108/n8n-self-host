import { NodeConnectionType } from 'n8n-workflow';
import type {
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';

import { solumAuthDescription } from './descriptions/SolumAuthDescription';
import { solumCreateUserDescription } from './descriptions/SolumCreateUser';
import { solumLogoutDescription } from './descriptions/solumLogoutDescription';
import { solumAuthExecute } from './excute/SolumAuthExcute';

export class SolumV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			version: 1,
			displayName: 'Solum',
			name: 'solum',
			icon: 'file:Solum.svg',
			group: ['input'],
			inputs: [NodeConnectionType.Main],
			outputs: [NodeConnectionType.Main],
			subtitle: '={{$parameter["loginType"]}}',
			defaults: {
				name: 'Solum',
			},
			credentials: [
				{
					name: 'solumApi',
					required: true,
				},
			],
			properties: [
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					noDataExpression: true,
					options: [
						{
							name: 'Authasdasd',
							value: 'auth',
						},
						{
							name: 'Logout',
							value: 'logout',
						},
						{
							name: 'Create User',
							value: 'createUser',
						},
					],
					default: 'auth',
				},
				solumAuthDescription.operations,
				...solumAuthDescription.properties,

				solumCreateUserDescription.operations,
				...solumCreateUserDescription.properties,

				solumLogoutDescription.operations,
				...solumLogoutDescription.properties,
			],
		};
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const action = this.getNodeParameter('resource', i);
			console.log('Starting execution...');
			if (action === 'auth') {
				const result = await solumAuthExecute.call(this, i);
				returnData.push(result);
			}
			if (action === 'logout') {
				// Add more action handling here
				console.log('Logging out...');
			}
			if (action === 'createUser') {
				console.log('Creating user...');
				// Add more action handling here
			}
			// Add more action handling here
		}

		console.log('Execution finished');
		return [returnData];
	}
}
