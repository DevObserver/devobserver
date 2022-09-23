-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "username" VARCHAR(255),
    "password" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "emailVerified" BOOLEAN,
    "image" VARCHAR(255),
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminSession" (
    "id" TEXT NOT NULL,
    "sid" VARCHAR(128) NOT NULL,
    "expire" TIMESTAMPTZ(6) NOT NULL,
    "sess" JSON,

    CONSTRAINT "adminSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "award" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "award_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channel" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255),
    "rss" VARCHAR(255),
    "rssHash" VARCHAR(255),
    "image" VARCHAR(255),
    "coverImage" VARCHAR(255),
    "description" TEXT,
    "color" VARCHAR(255),
    "feedImage" VARCHAR(255),
    "categoryId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channelTag" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "channelTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feed" (
    "id" TEXT NOT NULL,
    "index" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "url" TEXT,
    "image" VARCHAR(255),
    "coverImage" VARCHAR(255),
    "channelId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "awardId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "likes" INTEGER DEFAULT 0,
    "views" INTEGER DEFAULT 0,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedTag" (
    "id" TEXT NOT NULL,
    "feedId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "feedTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAccount" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "provider" VARCHAR(255) NOT NULL,
    "providerAccountId" VARCHAR(255) NOT NULL,
    "profile" JSON,
    "lastLogin" TIMESTAMPTZ(0),
    "authScheme" VARCHAR(255),
    "displayName" VARCHAR(255),
    "userName" VARCHAR(255),
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userChannelBlocked" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "channelId" TEXT,

    CONSTRAINT "userChannelBlocked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userChannelFollowed" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "userChannelFollowed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFeedLiked" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "feedId" TEXT NOT NULL,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userFeedLiked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFeedSaved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "feedId" TEXT NOT NULL,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userFeedSaved_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userFeedViewed" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "feedId" TEXT NOT NULL,
    "created" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userFeedViewed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_id_uindex" ON "admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "adminSession_id_uindex" ON "adminSession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "award_id_key" ON "award"("id");

-- CreateIndex
CREATE INDEX "award_name" ON "award"("name");

-- CreateIndex
CREATE UNIQUE INDEX "award_name_key" ON "award"("name");

-- CreateIndex
CREATE UNIQUE INDEX "category_id_uindex" ON "category"("id");

-- CreateIndex
CREATE INDEX "category_name" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "channel_id_uindex" ON "channel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "channel_url_key" ON "channel"("url");

-- CreateIndex
CREATE UNIQUE INDEX "channel_rss_key" ON "channel"("rss");

-- CreateIndex
CREATE INDEX "channel_category_index_id_fk" ON "channel"("categoryId");

-- CreateIndex
CREATE INDEX "channel_type_index_id_fk" ON "channel"("typeId");

-- CreateIndex
CREATE INDEX "channel_name" ON "channel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "channelTag_id_uindex" ON "channelTag"("id");

-- CreateIndex
CREATE INDEX "channelTag_channel_index_id_fk" ON "channelTag"("channelId");

-- CreateIndex
CREATE INDEX "channelTag_tag_index_id_fk" ON "channelTag"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "feed_id_uindex" ON "feed"("id");

-- CreateIndex
CREATE UNIQUE INDEX "feed_index_key" ON "feed"("index");

-- CreateIndex
CREATE UNIQUE INDEX "feed_url_key" ON "feed"("url");

-- CreateIndex
CREATE INDEX "feed_award_index_id_fk" ON "feed"("awardId");

-- CreateIndex
CREATE INDEX "feed_category_index_id_fk" ON "feed"("categoryId");

-- CreateIndex
CREATE INDEX "feed_channel_index_id_fk" ON "feed"("channelId");

-- CreateIndex
CREATE INDEX "feed_type_index_id_fk" ON "feed"("typeId");

-- CreateIndex
CREATE INDEX "title" ON "feed"("title");

-- CreateIndex
CREATE INDEX "feed_created_idx" ON "feed"("created" DESC);

-- CreateIndex
CREATE INDEX "feed_index_idx" ON "feed"("index");

-- CreateIndex
CREATE INDEX "feed_categoryId_idx" ON "feed"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "feedTag_id_uindex" ON "feedTag"("id");

-- CreateIndex
CREATE INDEX "feedTag_feed_index_id_fk" ON "feedTag"("feedId");

-- CreateIndex
CREATE INDEX "feedTag_tag_index_id_fk" ON "feedTag"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "tag_id_uindex" ON "tag"("id");

-- CreateIndex
CREATE INDEX "tag_name" ON "tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "table_name_type_uindex" ON "type"("id");

-- CreateIndex
CREATE INDEX "type_name" ON "type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "type_name_key" ON "type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_id_uindex" ON "user"("id");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "account_id_uindex" ON "userAccount"("id");

-- CreateIndex
CREATE INDEX "userAccount_userId_idx" ON "userAccount"("userId");

-- CreateIndex
CREATE INDEX "userAccount_providerAccountId_idx" ON "userAccount"("providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "userAccount_provider_providerAccountId_key" ON "userAccount"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "userChannelBlocked_id_uindex" ON "userChannelBlocked"("id");

-- CreateIndex
CREATE INDEX "userChannelBlocked_channel_index_id_fk" ON "userChannelBlocked"("channelId");

-- CreateIndex
CREATE INDEX "userChannelBlocked_user_index_id_fk" ON "userChannelBlocked"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userChannelBlocked_userId_channelId_key" ON "userChannelBlocked"("userId", "channelId");

-- CreateIndex
CREATE UNIQUE INDEX "userChannel_id_uindex" ON "userChannelFollowed"("id");

-- CreateIndex
CREATE INDEX "userChannel_channel_index_id_fk" ON "userChannelFollowed"("channelId");

-- CreateIndex
CREATE INDEX "userChannel_user_index_id_fk" ON "userChannelFollowed"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userChannelFollowed_userId_channelId_key" ON "userChannelFollowed"("userId", "channelId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeedLike_id_uindex" ON "userFeedLiked"("id");

-- CreateIndex
CREATE INDEX "userFeedLike_feed_index_id_fk" ON "userFeedLiked"("feedId");

-- CreateIndex
CREATE INDEX "userFeedLike_user_index_id_fk" ON "userFeedLiked"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeedLiked_userId_feedId_key" ON "userFeedLiked"("userId", "feedId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeed_id_uindex" ON "userFeedSaved"("id");

-- CreateIndex
CREATE INDEX "userFeed_feed_index_id_fk" ON "userFeedSaved"("feedId");

-- CreateIndex
CREATE INDEX "userFeed_user_index_id_fk" ON "userFeedSaved"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeedSaved_userId_feedId_key" ON "userFeedSaved"("userId", "feedId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeedView_id_uindex" ON "userFeedViewed"("id");

-- CreateIndex
CREATE INDEX "userFeedView_feed_index_id_fk" ON "userFeedViewed"("feedId");

-- CreateIndex
CREATE INDEX "userFeedView_user_index_id_fk" ON "userFeedViewed"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userFeedViewed_userId_feedId_key" ON "userFeedViewed"("userId", "feedId");

-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_category_id_fk" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_type_id_fk" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "channelTag" ADD CONSTRAINT "channelTag_channel_id_fk" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "channelTag" ADD CONSTRAINT "channelTag_tag_id_fk" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_award_id_fk" FOREIGN KEY ("awardId") REFERENCES "award"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_category_id_fk" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_channel_id_fk" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feed" ADD CONSTRAINT "feed_type_id_fk" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedTag" ADD CONSTRAINT "feedTag_feed_id_fk" FOREIGN KEY ("feedId") REFERENCES "feed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedTag" ADD CONSTRAINT "feedTag_tag_id_fk" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userAccount" ADD CONSTRAINT "userAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userChannelBlocked" ADD CONSTRAINT "userChannelBlocked_channel_id_fk" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userChannelBlocked" ADD CONSTRAINT "userChannelBlocked_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userChannelFollowed" ADD CONSTRAINT "userChannel_channel_id_fk" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userChannelFollowed" ADD CONSTRAINT "userChannel_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userFeedLiked" ADD CONSTRAINT "userFeedLike_feed_id_fk" FOREIGN KEY ("feedId") REFERENCES "feed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userFeedLiked" ADD CONSTRAINT "userFeedLike_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFeedSaved" ADD CONSTRAINT "userFeed_feed_id_fk" FOREIGN KEY ("feedId") REFERENCES "feed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userFeedSaved" ADD CONSTRAINT "userFeed_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userFeedViewed" ADD CONSTRAINT "userFeedView_feed_id_fk" FOREIGN KEY ("feedId") REFERENCES "feed"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userFeedViewed" ADD CONSTRAINT "userFeedView_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
