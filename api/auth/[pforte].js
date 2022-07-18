import process from 'node:process';

import mongooseAdapter from '@pforte/adapter-mongoose';
import pforte from '@pforte/core';
import githubProvider from '@pforte/provider-github';

import connectToMongodb from '../../backend/lib/connect-to-mongodb';

export default pforte({
	adapter: mongooseAdapter(connectToMongodb),
	providers: [
		githubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	maxAge: 24 * 60 * 60, // 1 day
});
