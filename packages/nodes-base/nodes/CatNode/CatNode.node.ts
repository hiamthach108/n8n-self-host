/* eslint-disable n8n-nodes-base/node-class-description-outputs-wrong */
/* eslint-disable n8n-nodes-base/node-class-description-inputs-wrong-regular-node */
import type { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class CatNode implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'CatNode',
		name: 'catNode',
		icon: 'file:catnode.svg',
		group: ['transform'],
		version: 1,
		// subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Cat API',
		defaults: {
			name: 'Cat node',
		},
		inputs: ['main' as NodeConnectionType],
		outputs: ['main' as NodeConnectionType],
		// credentials: [
		// 	{
		// 		name: 'NasaPicsApi',
		// 		required: true,
		// 	},
		// ],
		requestDefaults: {
			baseURL: 'https://cataas.com',
			// headers: {
			// 	Accept: 'application/json',
			// 	'Content-Type': 'application/json',
			// },
		},
		properties: [
			{
				displayName: 'Infomation About',
				name: 'infomation',
				type: 'options',
				options: [
					{
						name: 'Random Cat',
						value: 'randomCat',
						description: 'Get a random cat image',
						routing: {
							request: {
								method: 'GET',
								url: '/cat',
							},
						},
					},
					{
						name: 'Random Cat Gif',
						value: 'randomCatGif',
						description: 'Get a random cat Gif',
						routing: {
							request: {
								method: 'GET',
								url: '/cat/gif',
							},
						},
					},
					{
						name: 'Cat With Tag',
						value: 'catWithTag',
						description: 'Get a cat image with a specific tag',
						routing: {
							request: {
								method: 'GET',
								url: '=/cat/{{$parameter.color}},{{$parameter.status}}',
							},
						},
					},
				],
				default: 'randomCat',
			},
			{
				displayName: 'Choose a Color',
				name: 'color',
				type: 'options',
				options: [
					{
						name: 'Black',
						value: 'black',
					},
					{
						name: 'White',
						value: 'white',
					},
					{
						name: 'Orange',
						value: 'orange',
					},
				],
				default: 'black',
				displayOptions: {
					show: {
						infomation: ['catWithTag'],
					},
				},
				description: 'Select the status of the cat',
				required: true,
				// 	routing: {
				// 		request: {
				// 			method:"GET",
				// 				url: '=/cat/{{parameter.color}},{{parameter.status}}',
				// 		},
				// },
			},
			{
				displayName: 'Choose a Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Cute',
						value: 'cute',
					},
					{
						name: 'Sad',
						value: 'sad',
					},
					{
						name: 'Sleep',
						value: 'sleep',
					},
				],
				default: 'cute',
				displayOptions: {
					show: {
						infomation: ['catWithTag'],
					},
				},
				description: 'Select the status of the cat',
			},
		],
	};
}
