'use client';

import { useEffect } from 'react';
import { Pagination, Select, Spin } from 'antd';
import { useModelSelector } from '@/clients';
import { Footer } from '@/components';

import { Editor } from './editor';
import { Header } from './header';

export function Home() {
  const posts = useModelSelector(ctx => ctx.model.posts);
  const postCount = useModelSelector(ctx => ctx.model.postCount);
  const postsSearchParams = useModelSelector(ctx => ctx.model.postsSearchParams);
  const postsFetchLoading = useModelSelector(ctx => ctx.model.postsFetchLoading);
  const refreshPosts = useModelSelector(ctx => ctx.refreshPosts);
  const dispatch = useModelSelector(ctx => ctx.dispatch);

  useEffect(() => {
    refreshPosts();
  }, [postsSearchParams]);

  return (
    <>
      <Header />

      <div className="w-full mt-10">
        {/* <div className="mt-[50px] pb-[100px]"> */}
        <div className="mb-6">
          <Editor onResetEditor={refreshPosts} />
        </div>

        {posts.length > 0 && (
          <div className="mb-2 flex justify-between">
            <Select<(typeof postsSearchParams)['orderBy']>
              value={postsSearchParams.orderBy}
              onChange={value => {
                dispatch(draft => {
                  draft.postsSearchParams.orderBy = value;
                });
              }}
              bordered={false}
              options={[
                { value: 'updatedAt', label: 'Last modified' },
                { value: 'createdAt', label: 'Last created' }
              ]}
            />
            <Pagination
              simple
              defaultCurrent={postsSearchParams.page + 1}
              pageSize={postsSearchParams.pageSize}
              total={postCount}
              onChange={(page, pageSize) => {
                dispatch(draft => {
                  draft.postsSearchParams.page = Math.max(page - 1, 0);
                  draft.postsSearchParams.pageSize = pageSize;
                });
              }}
            />
          </div>
        )}
        <Spin spinning={postsFetchLoading}>
          {posts.map(post => {
            return (
              <section className="mb-4" key={post.id}>
                <Editor defaultPost={post} onResetEditor={refreshPosts} />
              </section>
            );
          })}
        </Spin>
      </div>

      <Footer />
    </>
  );
}
