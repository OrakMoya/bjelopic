<script>

    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#await data.streamed.employee_data}
    Loading
{:then employee}
    {#if employee}
        <main class="text-white p-2">
            <div class="max-w-screen-2xl mx-auto">
                <h1 class="text-4xl">{employee.name} {employee.surname}</h1>
            </div>
        </main>
    {:else}
        Error
    {/if}
{:catch error}
    Error
{/await}
