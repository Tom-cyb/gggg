<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="组件展示" name="1">
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-collapse-item>
      <el-collapse-item title="支持的事件" name="2">
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="事件名" width="180">
            </el-table-column>
            <el-table-column prop="name" label="描述" width="480">
            </el-table-column>
            <el-table-column prop="address" label="参数"> </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="参数属性含义 Efficiency" name="3">
        <div>
          <el-table :data="data" style="width: 100%">
            <el-table-column prop="date" label="事件名" width="180">
            </el-table-column>
            <el-table-column prop="name" label="描述" width="280">
            </el-table-column>
            <el-table-column prop="address" label="参数" width="180">
            </el-table-column>
            <el-table-column prop="awww" label="可选值" width="180">
            </el-table-column>
            <el-table-column prop="asss" label="默认值" width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="支持的方法 Controllability" name="4">
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="事件名" width="180">
            </el-table-column>
            <el-table-column prop="name" label="描述" width="180">
            </el-table-column>
            <el-table-column prop="address" label="参数"> </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel {
  width: 800px;
  height: 500px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-collapse {
  margin: auto;
  position: relative;
  top: -400px;
  left: 250px;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "button-click",
          name: "name, row, index",
          address: "当点击按钮时触发该事件",
        },
        {
          date: "selection-change",
          name: "selection, row",
          address: "当选择项发生变化时会触发该事件",
        },
        {
          date: "cell-click",
          name: "row, column, cell, event",
          address: "当某个单元格被点击时会触发该事件",
        },
        {
          date: "sort-change",
          name: "{ column, prop, order }",
          address: "当某个单元格被点击时会触发该事件",
        },
        {
          date: "current-change",
          name: "当前页数和每页条数",
          address: "当前页改变时会触发",
        },
        {
          date: "size-change",
          name: "当前页数和每页条数",
          address: "每页条数改变时会触发",
        },
      ],

      data: [
        {
          date: "header",
          name: "表格头相关参数极其所在列的相关信息",
          address: "Array",
          awww: "-",
          default: "-",
        },
        {
          date: "header[].prop",
          name: "某列表头对应的数据属性，数据中该属性的值会显示在该列",
          address: "string",
          awww: "-",
          default: "-",
        },
        {
          date: "header[].label",
          name: "某列表头要显示的信息",
          address: "string",
          awww: "-",
          default: "-",
        },
        {
          date: "header[].sortable",
          name: "某列表头是否显示排序图标",
          address: "boolean, string",
          awww: "true, false, 'custom'",
          default: "false",
        },
        {
          date: "header[].width",
          name: "某列的宽度",
          address: "string",
          awww: "-",
          default: "-",
        },
        {
          date: "header[].fixed",
          name: "某列是否左侧或右侧固定",
          address: "string, boolean",
          awww: "true, false, 'left', 'right'",
          default: "false",
        },
        {
          date: "header[].resizable",
          name: "某列的宽度是否可调整",
          address: "boolean",
          awww: "true, false",
          default: "true",
        },
        {
          date: "header[].showOverflowTooltip",
          name: "该列的单元格是否显示Tooltip",
          address: "boolean",
          awww: "true, false",
          default: "false",
        },
        {
          date: "header[].minWidth",
          name: "某列的列宽最小宽度",
          address: "string",
          awww: "-",
          default: "-",
        },
        {
          date: "header[].headerAlign",
          name: "某列的表头信息对齐方式",
          address: "string",
          awww: "left/center/right",
          default: "-",
        },
        {
          date: "header[].classdate",
          name: "给某列的单元格添加classdate属性",
          address: "string",
          awww: "-",
          default: "-",
        },
        {
          date: "height",
          name:
            "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
          address: "string/number",
          awww: "-",
          default: "-",
        },
        {
          date: "size",
          name: "是否支持复选Checkbox列",
          address: "string",
          awww: "medium / small / mini",
          default: "-",
        },
        {
          date: "withSelection",
          name: "是否支持复选Checkbox列",
          address: "boolean",
          awww: "true, false",
          default: "-",
        },
        {
          date: "withIndex",
          name: "是否增加索引编号列",
          address: "boolean",
          awww: "true, false",
          default: "-",
        },

        {
          date: "data",
          name: "Table要显示的数据",
          address: "Array",
          awww: "-",
          default: "-",
        },
        {
          date: "page",
          name: "Table 的分页相关信息",
          address: "Object",
          awww: "-",
          default: "-",
        },
        {
          date: "page.pageSize",
          name: "每页显示多少条记录",
          address: "number",
          awww: "-",
          default: "10",
        },
        {
          date: "page.currentPage",
          name: "当前页编号",
          address: "Object",
          awww: "-",
          default: "1",
        },
        {
          date: "page.layout",
          name: "组件布局，子组件名用逗号分隔",
          address: "String",
          awww: "sizes, prev, pager, next, jumper, ->, total, slot",
          default: "'prev, pager, next, jumper, ->, total'",
        },
        {
          date: "page.background",
          name: "是否为分页按钮添加背景色",
          address: "boolean",
          awww: "-",
          default: "false",
        },
        {
          date: "page.total",
          name: "总条目数",
          address: "number",
          awww: "-",
          default: "-",
        },
        {
          date: "emptyText",
          name: "当表格数据为空时显示的字符串",
          type: "string",
          option: "-",
          default: "当前数据为空",
        },
        {
          date: "border",
          name: "是否添加表格边框",
          type: "boolean",
          option: "true, false",
          default: "false",
        },
        {
          name: "fit",
          description: "列的宽度是否自撑开",
          type: "boolean",
          option: "true, false",
          default: "true",
        },
        {
          name: "heightCurrentRow",
          description: "是否要高亮当前行",
          type: "boolean",
          option: "true, false",
          default: "false",
        },
        {
          name: "showHeader",
          description: "是否显示表头",
          type: "boolean",
          option: "true, false",
          default: "true",
        },
      ],
    };
  },
};
</script>
