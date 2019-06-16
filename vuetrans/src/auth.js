template: `
<div v-if='data.hasSwitch'>
    <span class='edit-babel'>
        {{data.label}}
    </span>
    <span class='edit-switch'>
        <el-switch v-model='data.mod' on-text='可写' off-text='只读'>
    </el-switch>
    </span>
    <span class='edit-switch'>
        <el-switch v-model='data.range' on-text='全部' off-text='自己'>
        </el-switch>
    </span>
    <span class='edit-switch'>
        <el-switch v-model='data.audit' off-text='禁审' on-text='可审'>
        </el-switch>
    </span>
</div>
    `,
