/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export async function solumAuthExecute(
	this: IExecuteFunctions,
	i: number,
): Promise<INodeExecutionData> {
	const loginType = this.getNodeParameter('operation', i);
	const email = this.getNodeParameter('email', i, '') as string;
	const password = this.getNodeParameter('password', i, '') as string;

	console.log(`Processing item ${i + 1}`);
	console.log(`Login Type: ${loginType}`);
	console.log(`Username: ${email}`);
	console.log(`Password: ${password}`);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const body: { [key: string]: unknown } = {
		authType: loginType === 'email' ? 'credential' : loginType,
	};

	if (loginType === 'email') {
		body.email = email;
		body.password = password;
	}

	try {
		console.log('Making API request...');
		const responseData = await this.helpers.request({
			method: 'POST',
			url: 'http://192.168.30.30:8010/api/v1/auth/login',
			body,
			json: true,
		});
		console.log(`API request successful ${responseData}`);
		return { json: responseData };
	} catch (error) {
		console.error('API request failed', error);
		return { json: { error: error.message } };
	}
}
