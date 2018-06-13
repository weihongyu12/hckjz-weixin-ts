<template>
  <article class="content">
    <section
      v-if="content"
      class="markdown"
      v-html="contentMarkdown"/>
    <footer v-if="address && homePage">
      <h3>联系方式</h3>
      <address class="address">
        <dl v-if="address">
          <dt>地址：</dt>
          <dd>{{ address }}</dd>
        </dl>
        <dl v-if="homePage">
          <dt>主页：</dt>
          <dd>
            <a :href="homePage">{{ homePage }}</a>
          </dd>
        </dl>
      </address>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';

export default Vue.extend({
  name: 'ArticleContent',
  props: {
    content: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    homePage: {
      type: String,
      default: '',
    },
  },
  computed: {
    contentMarkdown():string {
      return marked(this.content, { sanitize: true });
    },
  },
});
</script>

<style lang="scss" scoped>
  .content {
    padding: 15px;
  }

  .address {
    font-style: normal;
    dl {
      display: flex;
    }
    dt {
      width: 3em;
    }
    dd {
      flex: 1;
      margin: 0;
    }
  }

  .markdown {
    h1, h2, h3, h4, h5, h6 {
    }
    h1 {
    }
    h2 {
    }
    h3 {
    }
    h4 {
    }
    h5 {
    }
    h6 {
    }
    p {
    }
    strong {
    }
    em {
    }
    del {
    }
    blockquote {
    }
    code {
    }
    ol, ul {
      padding-left: 30px;
    }
    ol {
      list-style-type: decimal;
    }
    ul {
      list-style-type: disc;
    }
  }
</style>
