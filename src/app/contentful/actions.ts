import { ActionContext }             from 'vuex';
import { IContentfulState }          from './state';
import { IState }                    from '../state';
import { HttpService }               from '../shared/services/HttpService';
import { AxiosResponse, AxiosError } from 'axios';
import { router }                    from '../router';

export interface IContentfulResponse {
  count: number;
}

export interface IContentfulActions {
  getContent(context: ActionContext<IContentfulState, IState>, params: { slug: string, locale: string }): Promise<any>;
}

export const ContentfulActions: IContentfulActions = {
  getContent({ commit, state }: ActionContext<IContentfulState, IState>, params: { slug: string, locale: string }): Promise<any> {
    return HttpService
    .get('/cms', { params })
    .then((res: AxiosResponse<IContentfulResponse>) => {
      commit('SET_PAGE', res.data);
    })
    .catch/* istanbul ignore next */((e: AxiosError) => {
      throw e;
    });
  },
};
