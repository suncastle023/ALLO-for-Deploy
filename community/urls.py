from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.event_list, name='event_list'),
    path('notices/', views.notice_list, name='notice_list'),
    path('chatrooms/', views.chatroom_list, name='chatroom_list'),
    path('post/', views.post_list, name='post_list'),
    path('post/create/', views.post_create, name='post_create'),
    path('post/update/<int:pk>/', views.post_update, name='post_update'),
    path('post/delete/<int:pk>/', views.post_delete, name='post_delete'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/like/<int:pk>/', views.like_post, name='like_post'),
    path('post/bookmark/<int:pk>/', views.bookmark_post, name='bookmark_post'),
    path('post/bookmarked/', views.bookmarked_posts, name='bookmarked_posts'),
]
