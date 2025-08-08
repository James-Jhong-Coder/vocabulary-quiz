<script setup></script>
<template>
    <div class="section">
        <Table>
            <template #header>
                <th>序號</th>
                <th>字卡中文</th>
                <th>分類</th>
                <th>更新日期</th>
                <th>操作</th>
            </template>
            <template #body>
                <tr>
                    <td colspan="5">尚無資料</td>
                </tr>
            </template>
        </Table>
        <PrimeButton label="新增字卡" />
        <PrimeButton label="AI 新增字卡" class="mt-4" />
    </div>
</template>

<style scoped>
.section {
    @apply flex flex-col;
}
</style>
