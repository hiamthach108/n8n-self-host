import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { SolumV1 } from './v1/SolumV1.node';

export class Solum extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Solum Authen',
			name: 'solum',
			icon: 'file:Solum.svg',
			group: ['input'],
			defaultVersion: 1,
			description: 'Solum feature',
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new SolumV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
