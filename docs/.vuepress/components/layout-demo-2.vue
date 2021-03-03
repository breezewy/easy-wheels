<template>
  <div style="paddinw-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>


    <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <w-header style="height: 50px; background:lightskyblue;">
        header
      </w-header>
      <w-layout>
        <w-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </w-sider>
        <w-content style="height: 100px; background:deepskyblue;">
          content
        </w-content>
      </w-layout>
      <w-footer style="height: 50px; background:lightskyblue;">
        footer
      </w-footer>
    </w-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import WLayout from '../../../src/layout'
  import WHeader from '../../../src/header'
  import WFooter from '../../../src/footer'
  import WContent from '../../../src/content'
  import WSider from '../../../src/sider'
  export default {
    components: {WLayout, WHeader, WFooter, WContent, WSider},
    data () {
      return {
        content: `
          <w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <w-header style="height: 50px; background:lightskyblue;">
              header
            </w-header>
            <w-layout>
              <w-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </w-sider>
              <w-content style="height: 100px; background:deepskyblue;">
                content
              </w-content>
            </w-layout>
            <w-footer style="height: 50px; background:lightskyblue;">
              footer
            </w-footer>
          </w-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>