-- CreateTable
CREATE TABLE "Todolist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "completedAt" BOOLEAN NOT NULL DEFAULT false
);
