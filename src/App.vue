<template>
  <div id="app">
    <section style="margin-top: 50px; margin-bottom: 200px;">
      <lol-progress width="200" height="20"></lol-progress>
      <lol-progress width="200" height="20" percentage="50"></lol-progress>
      <lol-progress width="200" height="20" percentage="60" activeColor="gold"></lol-progress>
      <lol-progress width="200" height="20" percentage="70" activeColor="linear-gradient(90deg, #C568F9 0%, #9337F1 100%)"></lol-progress>
      <lol-progress width="200" height="20" percentage="80" inactiveColor="#E6A23C"></lol-progress>
      <lol-progress width="200" height="20" percentage="70" textColor="purple"></lol-progress>
      <lol-progress width="200" height="20" percentage="70" textPosition="inside"></lol-progress>
      <lol-progress width="200" height="20" percentage="70" textPosition="follow"></lol-progress>
      <lol-progress width="200" height="20" textPosition="outside"></lol-progress>
    </section>

    <section style="width: 800px; display: flex; justify-content: space-around; margin-top: 50px; margin-bottom: 20px;">
      <lol-switch v-model="switchStatus1"></lol-switch>
      <lol-switch v-model="switchStatus2" disabled></lol-switch>
      <lol-switch v-model="switchStatus3" disabled></lol-switch>
      <lol-switch v-model="switchStatus4" activeColor="green"></lol-switch>
      <lol-switch v-model="switchStatus5" inactiveColor="#E6A23C"></lol-switch>
      <lol-switch v-model="switchStatus6" width="60" height="30"></lol-switch>
      <lol-switch v-model="switchStatus7" width="80" height="40" ></lol-switch>
    </section>

    <section style="margin-top: 50px; margin-bottom: 200px; padding: 20px;">
      <h2>Badge 标签</h2>

      <lol-badge title="99+">
        <span>LOOTBOX</span>
      </lol-badge>
      <br>
      <lol-badge title="NEW">
        <span>HIGHLIGHTS</span>
      </lol-badge>
      <br>
      <lol-badge :is-dot="true">
        <span>LOOTBOX</span>
      </lol-badge>
      <br>
      <lol-badge :is-dot="true">
        <span>HIGHLIGHTS</span>
      </lol-badge>
    </section>

    <section style="margin-top: 50px; margin-bottom: 200px; padding: 20px;">
      <h2>Heroes 英雄</h2>
      <lol-hero v-for="hero in heroes" :key="hero" :hero="hero"></lol-hero>
      <lol-hero hero="Vi" size="small"></lol-hero>
      <lol-hero hero="Vi" size="middle"></lol-hero>
      <lol-hero hero="Vi" size="large"></lol-hero>
      <lol-hero hero="Vi" size="large" :is-active="true"></lol-hero>
    </section>

    <section style="margin-top: 50px; margin-bottom: 200px; padding: 20px;">
      <h2>Cascader 级联器</h2>
      <lol-cascader :source.sync="cascaderDataSource1" :selected.sync="selectedCascaderData1" placeholder="点击选择"></lol-cascader>
      <br><br><br>
      <lol-cascader :source.sync="cascaderDataSource2" :selected.sync="selectedCascaderData2" :load-data="loadData" placeholder="点击选择"></lol-cascader>
    </section>

    <section style="margin-top: 50px; padding: 20px;">
      <h2>Collapse 手风琴</h2>
      <lol-collapse :multi-select="true" :selected.sync="selectedCollapseItem">
        <lol-collapse-item title="一" name="1">111</lol-collapse-item>
        <lol-collapse-item title="二" name="2">222</lol-collapse-item>
        <lol-collapse-item title="三" name="3">333</lol-collapse-item>
      </lol-collapse>
      {{selectedCollapseItem}}
    </section>

    <section style="margin-top: 50px;">
      <h2>Popover 弹出框</h2>
      <div style="overflow: hidden; border: 1px solid red; padding: 5px;">
        <lol-popover position="top">
          <template slot="content">
            <div>1111111111111111</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="bottom">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="left">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="right">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <hr>
        <lol-popover position="top" trigger="hover">
          <template slot="content">
            <div>1111111111111111</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="bottom" trigger="hover">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="left" trigger="hover">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <lol-popover position="right" trigger="hover">
          <template slot="content">
            <div>2222222222222</div>
          </template>
          <lol-button>按钮</lol-button>
        </lol-popover>
        <hr>
        <lol-popover position="top">
          <template slot="content" slot-scope="{close}">
            <div>Popover Content, Hello World</div>
            <lol-button @click="close">Cancel</lol-button>
          </template>
          <lol-button>Top</lol-button>
        </lol-popover>
      </div>
    </section>

    <section style="margin-top: 50px;">
      <h2>Tabs 标签页</h2>
      <lol-tabs :selected.sync="selectedTab">
        <lol-tabs-head>
          <lol-tabs-item name="heroes" disabled>英雄</lol-tabs-item>
          <lol-tabs-item name="career">职业</lol-tabs-item>
          <lol-tabs-item name="position">位置</lol-tabs-item>
          <template slot="actions">
            <lol-button>设置</lol-button>
          </template>
        </lol-tabs-head>
        <lol-tabs-body>
          <lol-tabs-pane name="heroes">英雄列表</lol-tabs-pane>
          <lol-tabs-pane name="career">职业属性</lol-tabs-pane>
          <lol-tabs-pane name="position">适合位置</lol-tabs-pane>
        </lol-tabs-body>
      </lol-tabs>
    </section>

    <section id="toastBox" style="margin-top: 50px;">
      <h2>Toast 吐司</h2>
      <lol-button @click="showToast('success')">success</lol-button>
      <lol-button @click="showToast('info')">info</lol-button>
      <lol-button @click="showToast('warning')">warning</lol-button>
      <lol-button @click="showToast('danger')">danger</lol-button>
      <lol-button @click="showToast('loading')">loading</lol-button>
    </section>

    <section style="margin-top: 50px;">
      <h2>Container 布局容器</h2>
      <lol-container style="height: 400px; border: 1px solid black;">
        <lol-sider class="demoContainers">sider</lol-sider>
        <lol-container>
          <lol-header class="demoContainers">header</lol-header>
          <lol-content class="demoContainers">content</lol-content>
          <lol-footer class="demoContainers">footer</lol-footer>
        </lol-container>
      </lol-container>
      <br>
      <lol-container style="height: 400px; border: 1px solid black;">
        <lol-header class="demoContainers">header</lol-header>
        <lol-container>
          <lol-sider class="demoContainers">sider</lol-sider>
          <lol-content class="demoContainers">content</lol-content>
        </lol-container>
        <lol-footer class="demoContainers">footer</lol-footer>
      </lol-container>
    </section>

    <section style="margin-top: 50px;">
      <h2>Row and Col 栅格布局</h2>
      <lol-row>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 0}">
          <div class="demoCol"></div>
        </lol-col>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 0}">
          <div class="demoCol"></div>
        </lol-col>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 6}">
          <div class="demoCol"></div>
        </lol-col>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 6}">
          <div class="demoCol"></div>
        </lol-col>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 6}">
          <div class="demoCol"></div>
        </lol-col>
        <lol-col :span="24" :i-pad="{span: 12}" :pc="{span: 6}">
          <div class="demoCol"></div>
        </lol-col>
      </lol-row>
    </section>

    <section style="margin-top: 50px">
      <h2>Input 输入框</h2>
      <h3>Basic Input</h3>
      <lol-input value="erha"></lol-input>
      <br><br>

      <h3>Disable/ReadOnly Input</h3>
      <lol-input value="erha" disabled></lol-input>
      <lol-input value="erha" readonly></lol-input>
      <br><br>

      <h3>Set Placeholder</h3>
      <lol-input placeholder="我是提示信息"></lol-input>
      <br><br>

      <h3>Set HintMessage/HintType/HintIcon</h3>
      <lol-input icon-name="right" hint="成功" hint-type="success"></lol-input>
      <lol-input icon-name="info" hint="提示" hint-type="info"></lol-input>
      <lol-input icon-name="warning" hint="警告" hint-type="warning"></lol-input>
      <lol-input icon-name="error" hint="错误" hint-type="danger"></lol-input>
      <br><br>

      <h3>support change/focus/blur/input event</h3>
      <lol-input @change="inputChange"></lol-input>
      <br><br>

      <h3>support v-model</h3>
      <lol-input v-model="inputMessage"></lol-input>
      {{inputMessage}}
    </section>

    <section style="margin-top: 50px">
      <h2>Button 按钮</h2>
      <h3>Button Types</h3>
      <lol-button type="primary">button</lol-button>
      <lol-button type="success">button</lol-button>
      <lol-button type="warning">button</lol-button>
      <lol-button type="info">button</lol-button>
      <lol-button type="danger">button</lol-button>
      <br><br>

      <h3>Button with Icons</h3>
      <lol-button icon-name="setting">button</lol-button>
      <lol-button icon-name="setting" icon-position="right">button</lol-button>

      <lol-button icon-name="loading" :is-loading="true">button</lol-button>
      <lol-button icon-name="loading" :is-loading="isLoading1" @click="isLoading1 = !isLoading1">button</lol-button>
      <lol-button icon-name="loading" icon-position="right" :is-loading="isLoading2" @click="isLoading2 = !isLoading2">
        button
      </lol-button>
      <br><br>

      <h3>Button Group</h3>
      <lol-button-group>
        <lol-button icon-name="up">上一页</lol-button>
        <lol-button icon-name="up">上一页</lol-button>
        <lol-button icon-name="down" icon-position="right">下一页</lol-button>
      </lol-button-group>
    </section>

    <section style="margin-top: 50px">
      <h2>Icon 图标</h2>
      <lol-icon name="setting"></lol-icon>
      <lol-icon name="setting" color="#F56C6C"></lol-icon>
      <lol-icon name="loading" :is-loading="true"></lol-icon>
      <lol-icon name="setting" size="1.5em"></lol-icon>
    </section>
  </div>
</template>

<script>
  import district from "./database/district"

  function ajax(parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = district.filter((item) => item.parentId === parentId)
        result.forEach(node => {
          node.isLeaf = district.filter(item => item.parentId === node.id).length <= 0
        })
        success(result)
      }, 1000)
    })
  }

  export default {
    name: 'App',
    data() {
      return {
        isLoading1: true,
        isLoading2: false,
        inputMessage: 'xixixi',
        selectedTab: 'career',
        selectedCollapseItem: ['1', '2'],
        selectedCascaderData1: [],
        selectedCascaderData2: [],
        cascaderDataSource2: [],
        cascaderDataSource1: [{
          name: '山东',
          children: [{
            name: '烟台',
            children: [
              {name: '芝罘区'},
              {name: '福山区'},
              {name: '开发区'}
            ]
          }, {
            name: '青岛',
            children: [
              {name: '台北区'},
              {name: '栈桥区'},
              {name: '拾贝区'}
            ]
          }]
        }, {
          name: '江苏',
          children: [{
            name: '南京',
            children: [
              {name: '雨花台'},
              {name: '开发区'},
              {name: '江宁区'}
            ]
          }, {
            name: '无锡',
            children: [
              {name: '研究院'},
              {name: '银行区'},
              {name: '学校区'}
            ]
          }]
        }],
        heroes: ['Annie', 'Olaf', 'Galio', 'TwistedFate', 'XinZhao', 'Urgot', 'Leblanc', 'Vladimir', 'FiddleSticks', 'Kayle', 'MasterYi', 'Alistar', 'Ryze',
        'Sion', 'Sivir', 'Soraka', 'Teemo', 'Tristana', 'Warwick', 'Nunu', 'MissFortune', 'Ashe', 'Tryndamere', 'Jax', 'Morgana', 'Zilean',
        'Singed', 'Evelynn', 'Twitch', 'Karthus', 'Chogath', 'Amumu', 'Rammus', 'Anivia', 'Shaco', 'DrMundo', 'Sona', 'Kassadin', 'Irelia',
        'Janna', 'Gangplank', 'Corki', 'Karma', 'Taric', 'Veigar', 'Trundle', 'Swain', 'Caitlyn', 'Blitzcrank', 'Malphite', 'Katarina', 'Nocturne',
        'Maokai', 'Renekton', 'JarvanIV', 'Elise', 'Orianna', 'MonkeyKing', 'Brand', 'LeeSin', 'Vayne', 'Rumble', 'Cassiopeia', 'Skarner', 'Heimerdinger',
        'Nasus', 'Nidalee', 'Udyr', 'Poppy', 'Gragas', 'Pantheon', 'Ezreal', 'Mordekaiser', 'Yorick', 'Akali', 'Kennen', 'Garen', 'Leona',
        'Malzahar', 'Talon', 'Riven', 'KogMaw', 'Shen', 'Lux', 'Xerath', 'Shyvana', 'Ahri', 'Graves', 'Fizz', 'Volibear', 'Rengar',
        'Varus', 'Nautilus', 'Viktor', 'Sejuani', 'Fiora', 'Ziggs', 'Lulu', 'Draven', 'Hecarim', 'Khazix', 'Darius', 'Jayce', 'Lissandra',
        'Diana', 'Quinn', 'Syndra', 'AurelionSol', 'Kayn', 'Zoe', 'Zyra', 'Kaisa', 'Gnar', 'Zac', 'Yasuo', 'Velkoz', 'Taliyah',
        'Camille', 'Braum', 'Jhin', 'Kindred', 'Jinx', 'TahmKench', 'Senna', 'Lucian', 'Zed', 'Kled', 'Ekko', 'Qiyana', 'Vi',
        'Aatrox', 'Nami', 'Azir', 'Yuumi', 'Thresh', 'Illaoi', 'RekSai', 'Ivern', 'Kalista', 'Bard', 'Rakan', 'Xayah', 'Ornn',
        'Sylas', 'Neeko', 'Aphelios', 'Pyke', 'Sett'],
        switchStatus1: true,
        switchStatus2: true,
        switchStatus3: false,
        switchStatus4: false,
        switchStatus5: true,
        switchStatus6: true,
        switchStatus7: true,
      }
    },
    created() {
      /* Cascader 动态加载生成数据*/
      ajax(0).then(result => {
        this.cascaderDataSource2 = result
      })
    },
    methods: {
      inputChange(value) {
        console.log(value)
      },
      showToast(type) {
        this.$lolToast({
          message: `I am <strong>成功提示</strong> ${parseInt(Math.random() * 100)}`,
          autoClose: 50,
          type: type,
          enableHtml: true,
          closeButton: {
            text: '确认',
            callback: (toast) => {
              toast.log()
              console.log('用户点击了确认按钮！')
            }
          }
        })
      },
      loadData (onClickItemId, updateSource) {
        ajax(onClickItemId.id).then(onClickItemChildren => {
          updateSource(onClickItemChildren)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    background-color: #F1F1F1;
    border: 1px solid darkgoldenrod;
  }

  .demoCol {
    height: 50px;
    border: 1px solid red;
    background-color: #33A03D;
  }

  .demoContainers {
    border: 1px solid red;
    min-height: 100px;
  }
</style>
