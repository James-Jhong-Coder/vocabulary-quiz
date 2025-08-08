<template>
    <table class="table-auto">
        <thead>
            <tr>
                <slot name="header"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="body"></slot>
        </tbody>
        <tfoot v-if="$slots.footer">
            <tr>
                <slot name="footer"></slot>
            </tr>
        </tfoot>
    </table>
</template>

<script setup></script>
