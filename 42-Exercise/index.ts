function order_sandwich(...items: string[]): void {
    console.log('Sandwich includes:');
    
    items.forEach(item => console.log(item)
    )
    console.log("\n");
    
}

order_sandwich("Extra chicken", "Grilled mushroooms");
order_sandwich("Extra chicken", "Grilled mushroooms", "Extra cheese slice");
order_sandwich("Extra chicken", "Grilled mushroooms", "Extra cheese slice", "Thousand island sauce");