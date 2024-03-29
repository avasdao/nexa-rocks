/* Import types. */
import AffiliateType from '../types/Affiliate.js'

import {
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLString,
 } from 'graphql'

const SAMPLE_AFFILIATE = {
    affiliateid: '4ab47638-ba1b-4121-af48-39b2ca2c52f8',
    groupid: '773decc0-8f56-49af-a2fc-28ea1ebdf553',
    shortid: 'abc123',
    rewards: [{
        rewardid: 'fb73571c-b4c8-4489-a199-454e719b78bf',
        affiliateid: '4ab47638-ba1b-4121-af48-39b2ca2c52f8',
        amount: 1337,
        createdAt: 1679699865,
    }],
    createdAt: 1679699791,
}

/**
 * Affiliate
 */
export default {
    type: new GraphQLList(AffiliateType),
    args: {
        affiliateid: {
            type: GraphQLString,
            description: `Provide one or more Affiliate IDs for data retrieval.`,
        },
        groupid: {
            type: GraphQLString,
            description: `Provide one or more Group IDs for data retrieval.`,
        },
    },
    resolve: (_root, args, ctx) => {
        console.log('Affiliate (args):', args)

        return [SAMPLE_AFFILIATE]
    },
    description: `Request Affiliate program details, including: balances, bonuses and more...`,
}
