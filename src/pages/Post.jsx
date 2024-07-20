//仿照Twitter的推文浏览和发布页面，设计类似的完整页面。使用Material UI，生成JSX组件
/*应该包含如下组件Post View Page
		Post Card (View)
			Author Info, Subscribe Func, other Func
			Post Time
			Post Stat (Interaction)
		Comment Area
			Comment Card
				Profile Pic, Name, content, mention other users
				Delete Func
				Reply Func
 */
import { useParams } from "react-router";
//请从Material UI中import所有用到的组件
import { Avatar, Button, Grid, Container, Paper, TextField, Typography } from '@material-ui/core';

import React from'react';
import PostCard from '@/components/PostCard';
import PostViewPage from '@/components/PostViewPage';
import PostStat from '@/components/PostStat';
 

const Post = (props) => {
  // 在这里使用props.match.params.id来获取URL中的id
  const { id } = useParams()
      return(  
        <div>
            <div>
                <PostCard/>
                <Container>
                    <PostViewPage>
                        <Grid>
                            <Grid.Column>
                                <PostStat/>
                                <PostStat/>
                            </Grid.Column>
                        </Grid>
                    </PostViewPage>
                </Container>
            </div>
        </div>
      )
}

export default Post; 