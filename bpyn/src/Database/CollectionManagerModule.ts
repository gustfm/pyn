import { Module } from "@nestjs/common";
import { CollectionManager } from "./CollectionManager";

@Module({
    controllers: [],
    providers: [CollectionManager],
    exports: []
})
export class CollectionManagerModule {}
