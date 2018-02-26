<template>
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item>
            <div class="title">
              ThinkPlant <br/>
              첫 번째 관점, 익숙한 것의 낯선 조합, 아이디어 탄생의 비결<br/>
              두 번째 관점, 개념정의를 바꾸면 아이디어는 저절로 생긴다<br/>
              세 번째 관점, 가슴으로 생각하는 역지사지(易地思之), 아이디어 잉태의 산실<br/>
              네 번째 관점, 전제나 가정을 없앨 때, 전대미문의 새로운 아이디어가 부각된다<br/>
              다섯 번째 관점, 내가 사용하는 단어가 아이디어의 품격을 좌우한다<br/>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
