import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class SolumApi implements ICredentialType {
	name = 'solumApi';

	displayName = 'Solum API';

	documentationUrl = 'solum';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	// async authenticate(
	// 	credentials: ICredentialDataDecryptedObject,
	// 	requestOptions: IHttpRequestOptions,
	// ): Promise<IHttpRequestOptions> {
	// 	// Add the API key to the request headers
	// 	const apiKey = credentials.apiKey as string;

	// 	if (!requestOptions.headers) {
	// 		requestOptions.headers = {};
	// 	}

	// 	requestOptions.headers.Authorization = `Bearer ${apiKey}`;
	// 	return requestOptions;
	// }
}
