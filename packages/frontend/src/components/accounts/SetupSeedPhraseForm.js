import React from 'react';
import { Translate } from 'react-localize-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import IconMCopy from '../../images/IconMCopy';
import FormButton from '../common/FormButton';


const CustomDiv = styled(`div`)`
    .buttons-row {
        display: block;

        button {
            width: 100% !important;
        }
    }
    #seed-phrase {
        flex-wrap: wrap;
        user-select: all;
        margin: 35px 0;
        display: flex;

        .single-phrase {
            background: #f8f8f8;
            padding: 12px;
            word-break: break-all;
            margin: 5px;
            flex: 1;
            min-width: 125px;
        }
    }
`;

const Number = styled(`span`)`
    ::before {
        content: '${props => props.number || 1}';
        color: #999;
        padding-right: 12px;
        font-size: 12px;
    }
`;

const SetupSeedPhraseForm = ({
    seedPhrase,
    handleCopyPhrase,
    linkTo,
    location,
    hasSeedPhraseRecovery,
    match: { params: { accountId } }
}) => {

    return (
        <CustomDiv translate='no' className='notranslate skiptranslate'>
            <div id='seed-phrase'>
                {seedPhrase.split(' ').map((word, i) => (
                    <span className='single-phrase' key={`phrase-${i}`}>
                        <Number number={i + 1} className='h4'>{word} </Number>
                    </span>
                ))}
            </div>
            <div className='buttons-row'>
                <FormButton
                    onClick={handleCopyPhrase}
                    color='seafoam-blue-white'
                    data-test-id="copySeedPhraseButton"
                >
                    <Translate id='button.copyPhrase' />
                    <IconMCopy color='#6ad1e3' />
                </FormButton>
                <FormButton
                    disabled={hasSeedPhraseRecovery}
                    linkTo={linkTo ? linkTo : `/setup-seed-phrase/${accountId}/verify${location.search}`}
                    color='blue'
                    data-test-id="continueToSeedPhraseVerificationButton"
                >
                    <Translate id='button.continue' />
                </FormButton>
            </div>
        </CustomDiv>
    );
};

export default withRouter(SetupSeedPhraseForm);
